document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.querySelector(".projects-container");

    // Clone items dynamically for seamless scrolling
    const projects = [...projectsContainer.children];
    projects.forEach((project) => {
        let clone = project.cloneNode(true);
        projectsContainer.appendChild(clone);
    });

    // No need for manual scrolling; CSS animation handles it
});
