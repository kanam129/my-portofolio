document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('project-detail-content');
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  if (!content || typeof projects === 'undefined' || !projectId) return;

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    content.innerHTML = `
      <div style="text-align:center; padding: 80px 0;">
        <h1 style="font-family:'Space Grotesk',sans-serif; font-size:2.5rem; font-weight:800; color:var(--text-primary); margin-bottom:16px;">Project Not Found</h1>
        <p style="color:var(--text-secondary); margin-bottom:40px;">The project you're looking for doesn't exist.</p>
        <a href="projects.html" class="btn-secondary">← Back to Projects</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${project.title} — Khoirul Anam`;

  const hasImages = project.imageUrls && project.imageUrls.length > 0;
  const mainImgSrc = hasImages ? project.imageUrls[0] : 'https://placehold.co/1200x600/0d1628/63b3ed?text=Project';

  const thumbnailsHTML = hasImages && project.imageUrls.length > 1
    ? project.imageUrls.map((url, i) => `
        <img src="${url}" alt="Thumbnail ${i + 1}" class="detail-thumb ${i === 0 ? 'active' : ''}" data-index="${i}" loading="lazy">
      `).join('')
    : '';

  content.innerHTML = `
    <a href="projects.html" class="detail-back-link fade-in-up">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      All Projects
    </a>

    <div class="fade-in-up fade-delay-1">
      <h1 class="detail-title">${project.title}</h1>
      <div class="detail-tags">
        ${project.tags.map(tag => `<span class="tag-chip">${tag}</span>`).join('')}
      </div>
    </div>

    <div class="detail-main-image fade-in-up fade-delay-2">
      <img id="main-image" src="${mainImgSrc}" alt="${project.title}">
    </div>

    ${thumbnailsHTML ? `<div id="thumbnail-container" class="detail-thumbnails fade-in-up fade-delay-3">${thumbnailsHTML}</div>` : ''}

    <div class="detail-prose fade-in-up fade-delay-3">
      ${project.longDescription || `<p>${project.description}</p>`}
    </div>

    <div class="detail-cta fade-in-up fade-delay-4">
      ${project.liveUrl && project.liveUrl !== '#' ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Visit Live Site
        </a>
      ` : ''}
      ${project.sourceUrl && project.sourceUrl !== '#' ? `
        <a href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          Source Code
        </a>
      ` : ''}
    </div>
  `;

  // Initial portrait detection for project cards area and detail image
  setTimeout(() => {
    if (window.detectPortraitImages) window.detectPortraitImages('.detail-main-image');
  }, 100);

  // ============================================================
  // IMAGE GALLERY LOGIC
  // ============================================================
  if (!hasImages || project.imageUrls.length <= 1) return;

  const mainImage = document.getElementById('main-image');
  const thumbContainer = document.getElementById('thumbnail-container');
  if (!mainImage || !thumbContainer) return;

  let currentIndex = 0;
  let autoSlide;

  const updateImage = (index) => {
    mainImage.style.opacity = '0';
    mainImage.style.transform = 'scale(1.02)';
    setTimeout(() => {
      mainImage.src = project.imageUrls[index];
      mainImage.style.opacity = '1';
      mainImage.style.transform = 'scale(1)';

      // Re-detect portrait on image switch
      const wrap = mainImage.closest('.detail-main-image');
      if (wrap) {
        const existing = wrap.querySelector('.img-blur-bg');
        if (existing) existing.remove();
        wrap.classList.remove('is-portrait');
      }
      if (window.detectPortraitImages) window.detectPortraitImages('.detail-main-image');
    }, 200);
    mainImage.style.transition = 'opacity 0.3s ease, transform 0.4s ease';

    currentIndex = index;
    thumbContainer.querySelectorAll('.detail-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  };

  const startAuto = () => {
    autoSlide = setInterval(() => {
      updateImage((currentIndex + 1) % project.imageUrls.length);
    }, 5000);
  };

  const stopAuto = () => clearInterval(autoSlide);

  thumbContainer.addEventListener('click', (e) => {
    const thumb = e.target.closest('.detail-thumb');
    if (!thumb) return;
    stopAuto();
    updateImage(parseInt(thumb.dataset.index, 10));
    setTimeout(startAuto, 6000);
  });

  updateImage(0);
  startAuto();
});
