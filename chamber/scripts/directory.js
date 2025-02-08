document.getElementById("grid-view").addEventListener("click", () => {
    document.getElementById("directory").classList.remove("list");
    document.getElementById("directory").classList.add("grid");
  });
  
  document.getElementById("list-view").addEventListener("click", () => {
    document.getElementById("directory").classList.remove("grid");
    document.getElementById("directory").classList.add("list");
  });
  
  const membersURL = './data/members.json';  


  async function getMembers() {
    try {
      const response = await fetch(membersURL);
      const data = await response.json();
      displayMembers(data.members);
    } catch (error) {
      console.log("Error loading members:", error);
    }
  }
  
  function displayMembers(members) {
    const directoryContainer = document.getElementById('directory');
    directoryContainer.innerHTML = ''; // Clear existing content
  
    members.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.classList.add('member');
  
      memberCard.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" loading="lazy">
        <h2>${member.name}</h2>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p class="membership ${member.membership.toLowerCase()}"><strong>Membership:</strong> ${member.membership}</p>
      `;
  
      directoryContainer.appendChild(memberCard);
    });
  }
  
  getMembers();
  