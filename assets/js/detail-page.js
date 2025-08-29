document.addEventListener('DOMContentLoaded', () => {
    const projectDetailContent = document.getElementById('project-detail-content');

    // Get project ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectDetailContent && typeof projects !== 'undefined' && projectId) {
        const project = projects.find(p => p.id === projectId);

        if (project) {
            // Update page title
            document.title = `${project.title} - Project Detail`;

            // Render project details
            projectDetailContent.innerHTML = `
                <article>
                    <h1 class="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-8">${project.title}</h1>
                    
                    <img src="${project.imageUrl}" alt="${project.title}" class="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8">

                    <div class="max-w-3xl mx-auto">
                        <div class="flex flex-wrap justify-center gap-2 mb-8">
                            ${project.tags.map(tag => `<span class="bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full">${tag}</span>`).join('')}
                        </div>

                        <div class="prose lg:prose-xl max-w-none text-slate-700">
                            <p class="lead text-xl">${project.description}</p>
                            <p>${project.longDescription || ''}</p>
                        </div>

                        <div class="flex justify-center gap-6 mt-12">
                            <a href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-100 bg-slate-600 hover:bg-slate-500 font-bold py-3 px-6 rounded-lg transition-colors">
                                View Source Code
                            </a>
                            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-white bg-slate-800 hover:bg-slate-700 font-bold py-3 px-6 rounded-lg transition-colors">
                                Visit Live Site
                            </a>
                        </div>
                    </div>
                </article>
            `;
        } else {
            // Project not found
            projectDetailContent.innerHTML = `
                <div class="text-center">
                    <h1 class="text-4xl font-bold text-slate-900">Project Not Found</h1>
                    <p class="text-slate-600 mt-4">The project you are looking for does not exist.</p>
                    <a href="projects.html" class="mt-8 inline-block bg-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors">
                        Return to All Projects
                    </a>
                </div>
            `;
        }
    }
});
