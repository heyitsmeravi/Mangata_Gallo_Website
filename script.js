let positions=["left","center","right"];
let currentIndex=0;

function changePosition(direction){
    let item1=document.getElementById("item1");
    let item2=document.getElementById("item2");
    let item3=document.getElementById("item3");
    if(direction === 'left'){
        currentIndex = (currentIndex - 1 + 3) % 3;
    } else if(direction === 'right'){
        currentIndex = (currentIndex + 1) % 3;
    }
    item1.className="items " + positions[currentIndex];
    item2.className="items " + positions[(currentIndex + 1) % 3];
    item3.className="items " + positions[(currentIndex + 2) % 3];
}

// Navbar scroll effect

let navbar=document.querySelector(".navbar");
let lastScroll=0;
window.addEventListener("scroll", function(){
    let diff=window.scrollY - lastScroll;
    if(diff > 10){
        navbar.classList.add("scrolled");
    } else if(diff < -10){
        navbar.classList.remove("scrolled");
    }
    lastScroll=window.scrollY;
});
