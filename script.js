  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function addRecommendation() {
    console.log("addRecommendation function called");

    const messageInput = document.getElementById('message');
    const recommendationsBlock = document.querySelector('.recommendations-block');
    
    if (messageInput.value.trim() !== '') {
        console.log("Creating new recommendation with message:", messageInput.value);
        
        const newRecommendation = document.createElement('div');
        newRecommendation.className = 'recommendation-box';
        newRecommendation.textContent = `"${messageInput.value.trim()}"`;
        
        recommendationsBlock.appendChild(newRecommendation);
        
        // Clear the form inputs
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.value = '';
        messageInput.value = '';        
        console.log("New recommendation added successfully");
        alert("Thank you for your recommendation!");
    } else {
        alert("Please enter text");
        console.log("Message input is empty, no recommendation added");
    }
}
function setupImageHover(defaultImageId, hoverImageId) {
    const defaultImage = document.getElementById(defaultImageId);
    const hoverImage = document.getElementById(hoverImageId);
  
    if (defaultImage && hoverImage) {
        defaultImage.addEventListener('mouseover', function() {
            defaultImage.style.display = 'none';
            hoverImage.style.display = 'inline';
        });
  
        hoverImage.addEventListener('mouseout', function() {
            hoverImage.style.display = 'none';
            defaultImage.style.display = 'inline';
        });
    } else {
        console.error('One or both image elements not found');
    }
  }
  
  // Call this function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    setupImageHover('email-default', 'email-hover');
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    setupImageHover('call-default', 'call-hover');
  });