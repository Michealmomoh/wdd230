const baseURL = 'https://michealmomoh.github.io/wdd230/';
const linksURL = 'https://michealmomoh.github.io/wdd230/data/links.json';
const linksList = document.querySelector('#linksList');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  weeks.forEach(week => {
    const weekItem = document.createElement('li');
    let linksHTML = `${week.week}: `;

    week.links.forEach((link, index) => {
      const separator = index < week.links.length - 1 ? ' | ' : '';
      linksHTML += `<a href="${link.url}">${link.title}</a>${separator}`;
    });

    weekItem.innerHTML = linksHTML;
    linksList.appendChild(weekItem);
  });
}

getLinks();