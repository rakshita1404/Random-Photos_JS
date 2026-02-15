const imageContainerEl = document.querySelector('.img-container');

let imageNum = 10;
let isLoading = false; // Add this flag

// Load images immediately when page loads
addNewImages();
addNewImages(); // Load 20 images total to ensure scrolling

window.addEventListener('scroll', () => {
    // Check if user has scrolled near the bottom
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100) {
        if (!isLoading) { // ← Check if already loading
            addNewImages();
        }
    }
});

function addNewImages() {
    isLoading = true; // ← Set flag before loading
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement('img');
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImgEl);  
    }

    // Reset flag after a short delay to allow next load
    setTimeout(() => {
        isLoading = false;
    }, 1000); // ← Wait 1 second before allowing next load
   
}


// const imageContainerEl = document.querySelector('.img-container');

// const btnEl = document.querySelector('.btn');

// btnEl.addEventListener('click', () => {
//     imageNum = 10;
//     addNewImages();
// });

// function addNewImages() {
//     for (let index = 0; index < imageNum; index++) {
//     const newImgEl = document.createElement('img');
//     newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
//     imageContainerEl.appendChild(newImgEl);  
//     }
   
// }

