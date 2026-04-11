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
