
const marks = document.querySelectorAll('.mark');
const firstRoutine = document.querySelectorAll('.routine1');

marks.forEach(mark => {
    mark.addEventListener('click', (e) => {
        if (mark.innerHTML === String.fromCodePoint(0x1F4CD)) {
            mark.innerHTML = "";
          } else {
            mark.innerHTML = String.fromCodePoint(0x1F4CD);
          }
          mark.classList.toggle('cross');
    })
})



