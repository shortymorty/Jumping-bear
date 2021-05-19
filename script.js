
var count = 0;
const stoneArray = ['-15px -20px', '-115px -20px', '-215px -20px',
                     '-20px -99px','-115px -99px', '-215px -99px', 
                    '-15px -183px', '-115px -183px', '-215px -183px'];
window.onload=function (){
        var stone = document.getElementById("stone");
        stone.addEventListener("animationiteration", () =>{
        count += 1; if (count == 9) count = 0;
        //console.log(count);
        stone.style.backgroundPosition = "" +  stoneArray[count];
    });
};


function jump(){
    var char = document.getElementById("bild");
    if (char.classList != "animateJump"){
        char.classList.toggle("animateRun");
        char.style.backgroundPositionY = "-140px";
        char.classList.add("animateJump");
        setTimeout(() => {
            char.classList.remove("animateJump");
            char.classList.add("animateRun");
            char.style.backgroundPositionY = "-10px";        
        }, 1000);
    }
    
};

var checkingStatus = setInterval(function(){
    var bild = document.getElementById("bild");
    var stone = document.getElementById("stone");
    var warning = document.getElementById("square");
    var bearTop = 
    parseInt(window.getComputedStyle(bild).getPropertyValue("top"));
    var bearLeft = 
    parseInt(window.getComputedStyle(bild).getPropertyValue("left"));    
    var stoneTop = 
    parseInt(window.getComputedStyle(stone).getPropertyValue("top"));
    var stoneLeft = 
    parseInt(window.getComputedStyle(stone).getPropertyValue("left"));
    var bearHeight =
    parseInt(window.getComputedStyle(bild).getPropertyValue("height"));
    var stoneHeight =
    parseInt(window.getComputedStyle(stone).getPropertyValue("height"));
    var bearWidth =
    parseInt(window.getComputedStyle(bild).getPropertyValue("width"));
    var stoneWidth =
    parseInt(window.getComputedStyle(stone).getPropertyValue("height"));
    
    // if bear hits stone do an alert!
    if (bearTop + bearHeight > stoneTop && (bearLeft + bearWidth/2 < stoneLeft + stoneWidth && bearLeft + bearWidth/2 > stoneLeft)) 
    {
        alert("Game over");
    }
        else
    warning.style.backgroundColor = "blue";
    //clearInterval(checkingStatus);
    //alert("game over");
    
    // if bear land on stone just run on top of stone and land after
    if (bearTop + bearHeight > stoneTop && (bearLeft + (bearWidth/2) < stoneLeft + stoneWidth && bearLeft + (bearWidth/2) > stoneLeft) && bild.classList == "animateJump")
    {
        warning.style.backgroundColor = "green";
        
        
        alert("Game over");
    }

}, 10);