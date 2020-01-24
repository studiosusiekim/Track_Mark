


const routines = document.getElementById('routines');


routines.addEventListener('click', e => {
  if(e.target.innerHTML === String.fromCodePoint(0x1F4CD)) {
    e.target.innerHTML = "";
    } else {
      e.target.innerHTML = String.fromCodePoint(0x1F4CD);
    }
    e.target.classList.toggle('cross');  
});



