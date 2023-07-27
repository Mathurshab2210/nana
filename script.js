// Updated JavaScript

window.onload = function () {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card, index) => {
      // Add the slide-in-left class to cards at even index, and slide-in-right class to cards at odd index
      card.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
    });
  };

  // for family part
  let poems = {
    "dreams": {
      "title": "Dreams",
      "author": "Langston Hughes",
      "poem": ["Hold fast to dreams", "For if dreams die", "Life is a broken-winged bird", "That cannot fly.", "", "Hold fast to dreams", "For when dreams go", "Life is a barren field", "Frozen with snow."]
    },
    "yourbest": {
      "title": "Your Best",
      "author": "Barbara Vance",
      "poem": ["Hold fast to dreams", "For if dreams die", "Life is a broken-winged bird", "That cannot fly.", "", "Hold fast to dreams", "For when dreams go", "Life is a barren field", "Frozen with snow."]
    },
    "snowday": {
      "title": "Snow Day",
      "author": "Barbara Vance",
      "poem": ["Hold fast to dreams", "For if dreams die", "Life is a broken-winged bird", "That cannot fly.", "", "Hold fast to dreams", "For when dreams go", "Life is a barren field", "Frozen with snow."]
    }
  };
  
  function loadDreams() {
    const h2 = document.querySelector("h2");
    const h3 = document.querySelector("h3");
    const p = document.querySelector("p");
    const div = document.querySelector("div");
    
    h2.innerHTML = "Dr. Priyanka Mathur";
    h3.innerHTML = "Er. Rishi MAthur";
    p.innerHTML = "Hold fast to dreams<br>For if dreams die<br>Life is a broken-winged bird<br>That cannot fly.<br><br>Hold fast to dreams<br>For When dreams go<br>Life is a barren field<br>Frozen with snow.<br>";
    div.innerHTML = '<img src="./images/dad_mom.jpg" class="image">';
  }
  
  function loadYourBest() {
    const h2 = document.querySelector("h2");
    const h3 = document.querySelector("h3");
    const p = document.querySelector("p");
    const div = document.querySelector("div");
    
    h2.innerHTML = "Mrs. Anjali Rai";
    h3.innerHTML = "Er. Ankit Rai";
    p.innerHTML = "If you always try your best<br>Then you'll never have to wonder<br>About what you could have done<br>If you'd summoned all your thunder.<br><br>And if your best<br>Was not as good<br>As you hoped it would be,<br>You still could say,<br>'I gave today<br>All that I had in me.'";
    div.innerHTML = '<img src="./images/anj.jpg" class="image">';
  }
  
  function loadSnowDay() {
    const h2 = document.querySelector("h2");
    const h3 = document.querySelector("h3");
    const p = document.querySelector("p");
    const div = document.querySelector("div");
    
    h2.innerHTML = "Mrs. Seema Mathur";
    h3.innerHTML = "Mr. Ankur MAthur";
    p.innerHTML = "In the winter it's every kid's dream<br>As snowflakes begin to appear,<br>That suddenly there'll be a blizzard,<br>And they'll cancel school for the year.<br><br>Though most kids are willing to settle,<br>And I am inclined to agree,<br>They could merely close school for one day—<br>One day off would be just fine with me.<br><br>A day free from all forms of homework,<br>A day without science or math,<br>When you leave all your school books at home—<br>And run out the door with a laugh.";
    div.innerHTML = '<img src="./images/seema.jpg" class="image">';
  }
  
  function loadCitations() {
    const h2 = document.querySelector("h2");
    const h3 = document.querySelector("h3");
    const p = document.querySelector("p");
    const div = document.querySelector("div");
    
    h2.innerHTML = "Bibliography";
    h3.innerHTML = "Image Citations";
    p.innerHTML = `Cliche, Myriam. “Feather Light.” Let's Keep It Wild, Blogspot, 4 Feb. 2012, 3.bp.blogspot.com/-8cbVCg0AU3I/Tz19x0To6bI/AAAAAAAABCA/evbuLgR4bu4/s400/3junco3.jpg.<br><br>Adobe Stock https://as1.ftcdn.net/jpg/01/99/04/72/500_F_199047280_90tzS7s83UzanNayWEESNulLfOaqoGFo.jpg.<br><br>Anne, Marry. “SNOW PLAY! OUTDOOR WINTER FUN FOR KIDS.” MamaSmiles, MarryAnne, 30 Jan. 2012, mamasmiles.com/media/2011/63d8bbbaa221_5FFA/2012_01_23_2835.jpg.`;
    div.innerHTML = '';
  }
  
  
