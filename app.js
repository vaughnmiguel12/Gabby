// Select buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Next button → move first item to the end
next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

// Previous button → move last item to the beginning
prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Background music autoplay handling
const bgMusic = document.getElementById("bg-music");

// Try to play automatically
bgMusic.play().catch(() => {
    console.log("Autoplay blocked — waiting for user interaction.");
    // When user clicks anywhere, start music
    document.addEventListener("click", () => {
        bgMusic.play();
    }, { once: true });
});
