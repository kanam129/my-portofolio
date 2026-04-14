document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('project-list');
  if (!projectList || typeof projects === 'undefined') return;

  const featured = projects.slice(0, 3);

  projectList.innerHTML = featured.map((project, i) => {
    const detailUrl = `project-detail.html?id=${project.id}`;
    const imgSrc = project.imageUrls?.[0] || 'https://placehold.co/600x400/0d1628/63b3ed?text=Project';
    return `
      <a href="${detailUrl}" class="project-card fade-in-up fade-delay-${i + 1}">
        <div class="project-card-image">
          <img src="${imgSrc}" alt="${project.title}" loading="lazy">
          <div class="project-card-image-overlay"></div>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-desc">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag-chip">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-arrow">
          View Project
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </a>
    `;
  }).join('');

  // Auto-detect portrait images and apply blur backdrop
  if (window.detectPortraitImages) window.detectPortraitImages('#project-list');
});
