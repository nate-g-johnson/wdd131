// Trail data
const trails = [
  {
    id: 1,
    name: "Lake Haigler Trail",
    difficulty: "Easy",
    length: "2.1 mi",
    description: "This is a short hike through some forest and around Lake Haigler. It is a great hike for families and beginners.",
    image: "images/lake-haigler-trail.webp",
    gear: ["Water bottle", "Sunhat", "Trail shoes", "Moisture-wicking clothing"]
  },
  {
    id: 2,
    name: "Paradise and Avery Loop",
    difficulty: "Moderate",
    length: "3.3 mi",
    description: "This trail will take you through the woods and has a moderate incline. The tail has a lot of bikers and runners.",
    image: "images/paradise-avery-loop.webp",
    gear: ["Backpack with water pouch", "Snacks", "Comfortable hiking boots", "Light jacket", "Sunglasses", "Hat", "First aid kit",]
  },
  {
    id: 3,
    name: "Blue Star Trail",
    difficulty: "Hard",
    length: "15.3 mi",
    description: "This is a longer hike that will take you through some beautiful forest and has views of the lake. It is an out and back trail with a 1,030ft elevation gain.",
    image: "images/blue-star-trail.webp",
    gear: ["Backpack with water pouch", "Layers", "Plenty of water", "Sun protection", "Navigation tools", "First aid kit", "Emergency whistle", "Headlamp", "Trail map"]
  }
];

// Display trail cards dynamically
function displayTrails() {
  const container = document.getElementById("trail-list");
  if (!container) return;

  container.innerHTML = trails.map(trail => `
    <article class="trail-card">
      <img src="${trail.image}" alt="${trail.name} trail" loading="lazy" />
      <h2>${trail.name}</h2>
      <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
      <p><strong>Length:</strong> ${trail.length}</p>
      <p>${trail.description}</p>
      <div class="gear">
        <h3>Recommended Gear</h3>
        <ul>
          ${trail.gear.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </article>
  `).join("");
}

// Highlight current nav link
function highlightActiveLink() {
  document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModified = document.getElementById("lastModified");
  if (lastModified) lastModified.textContent = `Last modified: ${document.lastModified}`;

  highlightActiveLink();
  displayTrails();
});
