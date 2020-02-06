


const routines = document.querySelector('.container');
const days = document.querySelectorAll('.days');

populateUi()

 function dayIndex() {
   const selectedDays = document.querySelectorAll('.flag');
  // Copy selectedDays into an array
  // Map through array
  // Return a new arry of indexes

   const dayI = [...selectedDays].map(function(day) {
     return [...days].indexOf(day);
   })
   
   localStorage.setItem('selectedDays', JSON.stringify(dayI));
   const selectedDysCount = selectedDays.length;
 }

function populateUi() {
  const selectedDays = JSON.parse(localStorage.getItem('selectedDays'));



if(selectedDays !== null && selectedDays.length > 0) {
  days.forEach((days, index) => {
    if (selectedDays.indexOf(index) > -1) {
      days.classList.add('flag');
      days.innerHTML = String.fromCodePoint(0x1F4CD);
    }
  });
}



// Flag routine 
container.addEventListener('click', e => {
  if(e.target.innerHTML === String.fromCodePoint(0x1F4CD)) {
    e.target.innerHTML = "";
    } else {
      e.target.innerHTML = String.fromCodePoint(0x1F4CD);
    }
    e.target.classList.toggle('flag');  
    dayIndex();
    console.log(e);
});

}


