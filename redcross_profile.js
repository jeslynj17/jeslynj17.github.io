document.addEventListener('DOMContentLoaded', () => {
    const volunteerBtn = document.getElementById('volunteerBtn');
  
    volunteerBtn.addEventListener('click', () => {
      // Check if form already exists
      if (document.getElementById('popupForm')) return;
  
      // Create modal background
      const modal = document.createElement('div');
      modal.id = 'popupForm';
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100vw';
      modal.style.height = '100vh';
      modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.zIndex = '999';
  
      // Create form box
      const formBox = document.createElement('div');
      formBox.style.backgroundColor = '#fff';
      formBox.style.padding = '20px';
      formBox.style.borderRadius = '10px';
      formBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      formBox.innerHTML = `
        <h3>Volunteer Sign-Up</h3>
        <form>
          <label>Name:<br><input type="text" name="name" required /></label><br><br>
          <label>Email:<br><input type="email" name="email" required /></label><br><br>
          <button type="submit">Submit</button>
          <button type="button" id="closeBtn">Cancel</button>
        </form>
      `;
  
      modal.appendChild(formBox);
      document.body.appendChild(modal);
  
      // Close button behavior
      document.getElementById('closeBtn').addEventListener('click', () => {
        document.getElementById('popupForm').remove();
      });
    });
  });

  
// Add interactivity: show fun fact on hover
const charityInfo = document.getElementById('charityInfo');

charityInfo.addEventListener('mouseenter', () => {
  // Prevent duplicates
  if (document.getElementById('charityFact')) return;

  const factBox = document.createElement('div');
  factBox.id = 'charityFact';
  factBox.textContent = "💡 Did you know? The Red Cross began collecting blood donations for patients in 1940. Today, about 500 blood drives are held every day to collect the approximately 36,000 units of red blood cells that are needed daily in the U.S.";
  factBox.style.marginTop = '10px';
  factBox.style.padding = '10px';
  factBox.style.backgroundColor = '#f0f8ff';
  factBox.style.borderLeft = '4px solid #00bfff';
  factBox.style.fontStyle = 'italic';

  charityInfo.appendChild(factBox);
});

charityInfo.addEventListener('mouseleave', () => {
  const factBox = document.getElementById('charityFact');
  if (factBox) factBox.remove();
});
