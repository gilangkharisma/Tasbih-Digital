const toUpButton = document.getElementById('toUp');

toUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



// Mendapatkan elemen dengan id "33"
const hitungan33 = document.getElementById("33");

// Menambahkan event listener pada elemen tersebut
hitungan33.addEventListener('click', function() {
  // Menggulir halaman ke elemen dengan id "33m"
  document.getElementById("33m").scrollIntoView({ behavior: "smooth" });
});

// Mendapatkan elemen dengan id "27"
const hitungan27 = document.getElementById("27");

// Menambahkan event listener pada elemen tersebut
hitungan27.addEventListener('click', function() {
  // Menggulir halaman ke elemen dengan id "27m"
  document.getElementById("27m").scrollIntoView({ behavior: "smooth" });
});

// Mendapatkan elemen dengan id "99"
const hitungan99 = document.getElementById("99");

// Menambahkan event listener pada elemen tersebut
hitungan99.addEventListener('click', function() {
  // Menggulir halaman ke elemen dengan id "99m"
  document.getElementById("99m").scrollIntoView({ behavior: "smooth" });
});

const countButton27 = document.getElementById('count27');
const countButton99 = document.getElementById('count99');
const countButton33 = document.getElementById('count33');

let count = 0;
const audioClick = new Audio('https://ia801702.us.archive.org/20/items/windows-xp-7-10-sound-effects-opus-48/Windows%207%20-%20Navigation%20Start%20%5BAfternoon%5D.opus'); // Ganti 'audio/click.mp3' dengan path audio klik biasa
const audioClickFinish = new Audio('https://ia801702.us.archive.org/20/items/windows-xp-7-10-sound-effects-opus-48/Windows%207%20-%20Exclamation%20%5BAfternoon%5D.opus'); // Ganti 'audio/click27.mp3' dengan path audio klik ke-27

countButton27.addEventListener('click', () => {
  count++;
  if (count > 27) {
    count = 1;
  }

  countButton27.textContent = count;

  if (count === 27) {
    audioClickFinish.play();
  } else {
    audioClick.play();
  }
});

countButton33.addEventListener('click', () => {
    count++;
    if (count > 33) {
      count = 1;
    }
  
    countButton33.textContent = count;
  
    if (count === 33) {
      audioClickFinish.play();
    } else {
      audioClick.play();
    }
  });

countButton99.addEventListener('click', () => {
    count++;
    if (count > 99) {
      count = 1;
    }
  
    countButton99.textContent = count;
  
    if (count === 99) {
      audioClickFinish.play();
    } else {
      audioClick.play();
    }
  });
