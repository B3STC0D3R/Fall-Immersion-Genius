const Darkness = document.body;
function darkMode() {
  if(Darkness.style.backgroundColor === 'white'){
    Darkness.style.backgroundColor = 'black';
    Darkness.style.backgroundColor = 'white';

  }
  else{
    Darkness.style.backgroundColor = 'white';
    Darkness.style.color = 'black';
  }
}
