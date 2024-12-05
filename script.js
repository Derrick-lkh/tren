// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready. Initializing fireworks.');

    

    // Select the fireworks container
    const container = document.getElementById('fireworks-container');
    if (!container) {
        console.error('Fireworks container not found!');
        return;
    }
    const fireworks = new Fireworks.default(container, {
        speed: 3,
        acceleration: 1.1,
        friction: 0.98,
        gravity: 1.2,
        particles: 200,
        explosion: 10,
        boundaries: {
            x: 0,
            y: 0,
            width: container.clientWidth,
            height: container.clientHeight,
        },
        traceLength: 3,
        flickering: 50,
    });


    // Function to open the curtains and reveal the content
    function openCurtain() {
        
        document.querySelector('.curtain-left').style.transform = 'translateX(-100%)';
        document.querySelector('.curtain-right').style.transform = 'translateX(100%)';
        // Wait for the curtain animation to complete and reveal the content
        document.querySelector('.question').style.display = 'none'; // Hide the question
        document.querySelector('.content').style.display = 'block'; // Show the content
        document.querySelector('.curtain-left').style.display = 'none'; // Hide the question
        document.querySelector('.curtain-right').style.display = 'none'; // Hide the question
        document.querySelector('.curtain-left').style.display = 'block'; // Show the content
        document.querySelector('.curtain-right').style.display = 'block'; // Show the content
        
        fireworks.start();
    }

    // Event listeners for Yes and No buttons
    document.getElementById('yesButton').addEventListener('click', openCurtain);
    document.getElementById("noButton").addEventListener("click", function() {
        let button = this;
        moveButtonRandomly(button);
    });

    
    function moveButtonRandomly(button) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
    
        // Set an interval to move the button every 500ms
        const randomX = Math.random() * (screenWidth - button.offsetWidth);
        const randomY = Math.random() * (screenHeight - button.offsetHeight);

        // Apply random position to the button
        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    
        // Stop moving after 5 seconds
        setTimeout(function() {
            clearInterval(interval);
        }, 5000);
    }

});
document.body.addEventListener('click', function() {
    var audio = document.getElementById('birthday-audio');
    audio.muted = false; // Unmute the audio
    audio.play().catch(function(error) {
        console.log("Error playing audio:", error);
    });
});