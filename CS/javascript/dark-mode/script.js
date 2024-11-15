const darkness = document.body;
function darkMode() {
  if(darkness.style.backgroundColor === 'white'){
    darkness.style.backgroundColor = 'black';
    darkness.style.color = 'white';

  }
  else{
    darkness.style.backgroundColor = 'white';
    darkness.style.color = 'black';
  }
}
