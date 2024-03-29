
document.addEventListener('DOMContentLoaded', function() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const today = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];
    consoleText(today, 'console', ['#ffffff']);

    function consoleText(word, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id);
        target.setAttribute('style', 'color:' + colors[0]);

        window.setInterval(function() {
            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = word.substring(0, letterCount);
                window.setTimeout(function() {
                    x = 1;
                    letterCount += x;
                    waiting = false;
                }, 1500);
            } else if (letterCount === word.length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function() {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1500);
            } else if (waiting === false) {
                target.innerHTML = word.substring(0, letterCount);
                letterCount += x;
            }
        }, 150);

        window.setInterval(function() {
            if (visible === true) {
                con.className = 'console-underscore hidden';
                visible = false;
            } else {
                con.className = 'console-underscore';
                visible = true;
            }
        }, 400);
    }

    // Display the message "Today is..."
    // document.getElementById("message").textContent = "Created By Aaron, The " + occupation;
    if (today === "Monday" || today === "Wednesday" || today === "Sunday")
    {
        document.getElementById("redirecting").style.display = "block";
    }
    setTimeout(function() {
      // Redirect based on the day
      if (today === "Wednesday") {

        window.location.href = "Wednesday.html";
      } else if (today === "Sunday") {
     
        window.location.href = "Sunday.html";
      } 
    //   else if (today === "Monday") {
      
    //     window.location.href = "index.html";
    //   }
    }, 5000); // Wait for 2 seconds before redirecting
  });