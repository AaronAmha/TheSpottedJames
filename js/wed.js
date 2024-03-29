(function () {
    // Define choices and their mappings
    const items = ['🍹', '🥤', '🍺', '🥂','🍸','🍻','🍷','🥃']; // Emoji choices
    const emojiToString = {
      '🍹': 'Well Drinks',
      '🥤': 'HIGH NOONS',
      '🍺': 'Coors Lights',
      '🥂':'Well Drinks',
      '🍸': 'HIGH NOONS',
      '🍻': 'Coors Lights',
      '🍷': 'HIGH NOONS',
      '🥃': 'Coors Lights'
    };
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
  
    function continuousSpin() {
      spin();
      setInterval(spin, 5000); // Restart spin every 5 seconds
    }
  
    function spin() {
      box1.dataset.spinned = '0'; // Reset to allow spinning
      animateBox1();
    }
  
    function animateBox1() {
      let startTime = null;
      const duration = 2000; // Duration of the spin
  
      function frame(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const itemIndex = Math.floor(progress / 100) % items.length;
        box1.textContent = items[itemIndex];
        box2.textContent = items[itemIndex + 1];
        box3.textContent = items[itemIndex + 2];
        if (progress < duration) {
          requestAnimationFrame(frame);
        } else {
          // When animation ends, pick a random emoji and convert it to a string
          const finalChoice = items[Math.floor(Math.random() * items.length)];
          box1.textContent = emojiToString[finalChoice];
          // Set texts for box2 and box3 after the spin
          box2.textContent = 'ARE';
          box3.textContent = '$4';
        }
      }
  
      requestAnimationFrame(frame);
    }
  
    // Initialize
    function init() {
      box1.textContent = '❓'; // Start with a question mark
      box2.textContent = '❓'; // Clear initial text
      box3.textContent = '❓'; // Clear initial text
    }
  
    init();
    continuousSpin();
  })();