document.addEventListener('DOMContentLoaded', () => {
    const projectListAll = document.getElementById('project-list-all');
    if (projectListAll && typeof projects !== 'undefined') {
        projectListAll.innerHTML = projects.map(project => {
            const detailUrl = `project-detail.html?id=${project.id}`;
            return `
            <a href="${detailUrl}" class="block bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src="${project.imageUrls[0]}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-slate-900">${project.title}</h3>
                    <p class="text-slate-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map(tag => `<span class="bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">${tag}</span>`).join('')}
                    </div>
                </div>
            </a>
        `}).join('');
    }
});
