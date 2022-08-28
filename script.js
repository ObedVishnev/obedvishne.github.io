/*function for sec */


function vinu() {
    sec = 0;
    min = 0;
    hou = 0;
    

var Interval = setInterval(click,1000);/*function for setInterval()*/

}
function click() {
    sec++;
     document.getElementById('sec').childNodes[0].nodeValue = sec;
     
document.getElementById('min').childNodes[0].nodeValue = min;

document.getElementById('hou').childNodes[0].nodeValue = hou;

    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hou++;
    }
    if (hou == 24) {
        hou = 0;
    }
}

function cleanInterval() {
    clearInterval(window.Interval);
    min = 0;
    hou = 0;
    sec = 0;
    document.removeEventListener("click",vinu())
}
