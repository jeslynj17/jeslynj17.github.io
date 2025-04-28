const apiURL = 'https://my-json-server.typicode.com/typicode/demo/posts';  // Still a mock endpoint

async function fetchCharities() {
  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }

    const data = await response.json();
    console.log(data);

    // Simulate transforming mock data to realistic charity data
    const transformedData = [
      {
        id: 1,
        name: "Save the Earth",
        description: "A nonprofit organization dedicated to protecting the environment.",
        website: "https://www.savetheearth.org",
        location: "Global",
        cause: "Environment",
        contact: {
          email: "info@savetheearth.org",
          phone: "123-456-7890"
        }
      },
      {
        id: 2,
        name: "Feed the Hungry",
        description: "We work to provide food to the hungry across the globe.",
        website: "https://www.feedthehungry.org",
        location: "Global",
        cause: "Hunger",
        contact: {
          email: "contact@feedthehungry.org",
          phone: "234-567-8901"
        }
      }
    ];

    displayCharities(transformedData);  // Use transformed data
  } catch (error) {
    handleError(error);
  }
}

function displayCharities(data) {
  const charitiesContainer = document.getElementById('api-charities');
  if (!charitiesContainer) return;

  charitiesContainer.innerHTML = '';

  if (data && Array.isArray(data) && data.length > 0) {
    data.forEach(charity => {
      const charityElement = document.createElement('div');
      charityElement.className = 'charity-item';

      charityElement.innerHTML = `
        <h3>${charity.name}</h3>
        <p><strong>Description:</strong> ${charity.description}</p>
        <p><strong>Website:</strong> <a href="${charity.website}" target="_blank">${charity.website}</a></p>
        <p><strong>Location:</strong> ${charity.location}</p>
        <p><strong>Cause:</strong> ${charity.cause}</p>
        <p><strong>Contact:</strong> ${charity.contact.email} | ${charity.contact.phone}</p>
      `;

      charitiesContainer.appendChild(charityElement);
    });
  } else {
    charitiesContainer.innerHTML = '<p>No charity data found.</p>';
  }
}

function handleError(error) {
  const charitiesContainer = document.getElementById('api-charities');
  if (charitiesContainer) {
    charitiesContainer.innerHTML = `<p style="color: red;">Error fetching data: ${error.message}</p>`;
  }
}

// Simulated PUT request (won’t persist)
async function updateCharityData(id, updatedCharityData) {
  const updateURL = `${apiURL}/${id}`;

  try {
    const response = await fetch(updateURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCharityData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }

    const data = await response.json();
    console.log('Updated charity:', data);
  } catch (error) {
    console.error('Error updating charity:', error);
  }
}

// Example update (won’t persist on this fake API)
const updatedCharity = {
  id: 1,
  name: "Save the Earth",
  description: "A nonprofit organization dedicated to protecting the environment.",
  website: "https://www.savetheearth.org",
  location: "Global",
  cause: "Environment",
  contact: {
    email: "info@savetheearth.org",
    phone: "123-456-7890"
  }
};

updateCharityData(1, updatedCharity);  // Simulate update
fetchCharities();  // Load charities
