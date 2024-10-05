function filterImages() {
    // Get the search input value and convert it to lowercase
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    
    // Get all the image cards
    const imageCards = document.querySelectorAll('.image-card');
    
    // Loop through all the image cards
    imageCards.forEach(card => {
        // Get the title of the image and convert it to lowercase
        const title = card.querySelector('.image-title').textContent.toLowerCase();
        
        // Check if the title includes the search query
        if (title.includes(searchQuery)) {
            // Show the image card if it matches the search query
            card.style.display = "block";
        } else {
            // Hide the image card if it doesn't match the search query
            card.style.display = "none";
        }
    });
}
