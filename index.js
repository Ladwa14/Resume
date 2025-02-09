const nav = document.querySelector(".menu-icon");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll",function(){
    if(lastScrollY < window.scrollY){
      console.log("we are moving down");
    }
    else{
      console.log("we are moving up");
    }

    lastScrollY = window.scrollY;
  })
