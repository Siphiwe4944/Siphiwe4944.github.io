// Generate random hearts all over the page
function generateHearts() {
    const heartContainer = document.querySelector('.heart-container');
    const heartCount = 50; // Number of hearts to display
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random position within the viewport
        const randomLeft = Math.random() * 100; // Random horizontal position
        const randomTop = Math.random() * 100; // Random vertical position
        heart.style.left = `${randomLeft}vw`;
        heart.style.top = `${randomTop}vh`;
        
        // Random animation duration and delay
        heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        
        heartContainer.appendChild(heart);
    }
}

// Call the function to generate hearts
generateHearts();

document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").textContent = "I love you too pookie 💖";
    document.getElementById("yesBtn").disabled = true;
    document.getElementById("noBtn").disabled = true;
});

let sizeIncrement = 1.1;
document.getElementById("noBtn").addEventListener("click", function() {
    let noButton = document.getElementById("noBtn");
    let yesButton = document.getElementById("yesBtn");

    // Increase button size
    noButton.style.transform = `scale(${sizeIncrement})`;
    yesButton.style.transform = `scale(${sizeIncrement})`;
    
    sizeIncrement += 0.1; // Increment the scaling factor
});
