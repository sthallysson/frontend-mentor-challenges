const projects = [
  "3-column-preview-card-component-main",
  "four-card-feature-section-master",
  "nft-preview-card-component-main",
  "order-summary-component-main",
  "social-links-profile-main",
  "social-proof-section-master",
  "stats-preview-card-component-main",
];

const projectList = document.querySelector(".project-list");

projects.map((projectName, idx) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <a href="/${projectName}/index.html">
            <img
              src="/${projectName}/design/desktop-design.jpg"
              alt="${projectName}"
            />
            <p>${formatProjectName(projectName)}</p>
          </a>
    `;

  projectList.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
