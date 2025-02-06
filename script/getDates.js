const currentYear = new Date().getFullYear();
document.getElementById('2025').textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 
  `Last Modified: ${lastModified.toDateString()} at ${lastModified.toLocaleTimeString()}`;


  const visitCounterElement = document.getElementById('visitCounter');
  let visits = Number(localStorage.getItem('visits')) || 0;
  visits++;
  visitCounterElement.textContent = visits;
  localStorage.setItem('visits', visits);
  const baseURL = "https://github.com/Michealmomoh/wdd230"; // Update with your GitHub Pages URL
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error("Failed to fetch links");
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

function displayLinks(weeks) {
    const activityList = document.getElementById("activity-links");
    activityList.innerHTML = ""; // Clear existing content

    weeks.forEach((week) => {
        let weekTitle = document.createElement("h3");
        weekTitle.textContent = week.week;
        activityList.appendChild(weekTitle);

        let ul = document.createElement("ul");
        week.links.forEach((link) => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = baseURL + link.url;
            a.textContent = link.title;
            li.appendChild(a);
            ul.appendChild(li);
        });

        activityList.appendChild(ul);
    });
}

// Load the links dynamically
getLinks();
