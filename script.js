let btn = document.getElementById("toggleBtn");
let bulb = document.getElementById("bulb");
btn.addEventListener('click', toggleBulb);
function toggleBulb(e){
    if(btn.textContent.includes('On')){
        bulb.src = "on.jpeg";
        btn.textContent = "Turn Off"
    }
    else{
        bulb.src = "off.jpeg";
        btn.textContent = "Turn On"
    }
    
}