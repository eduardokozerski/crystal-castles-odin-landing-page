const menuBtn = document.querySelector('.menuHamburger')
   let menuOpen = false;
   menuBtn.addEventListener('click', () => {
       if(!menuOpen) {
           menuBtn.classList.add('open');
           menuOpen = true;
       } else {
           menuBtn.classList.remove('open');
           menuOpen = false;
       }
   });
   const list = document.querySelector('.rightBarStuff');
menuBtn.addEventListener('click', () => {
    list.classList.toggle('show');
});


const qq = document.querySelector(".dropdownContent");
function s() {
        qq.style.display = "flex";
  }

  function c() {
        qq.style.display = "none";
}

function showOrHide() {
    if (qq.style.display === "none") {
      s()
    } else {
      c()
    }
  }