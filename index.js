

//when screen size is less than 768px, the id quickpolllogo will change to quick_true_logo.png
const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
    document.getElementById("quickpolllogo").src = "./assets/quick_true_logo.png";
    document.getElementById("quickpolllogo").style.width = "50px";
    document.getElementById("quickpolllogo").style.marginBottom = "none";
}

// change id variary's conetent between polls and surveys every afteer 3 seconds 

var i = 0;
var txt = 'Polls.';
var speed = 80;

// make a cursor effect for id variary

var cursor = true;
setInterval(() => {
    if (cursor) {
        document.getElementById('cursors').style.opacity = 0;
        cursor = false;
    }
    else {
        document.getElementById('cursors').style.opacity = 1;
        cursor = true;
    }
}, 400);


function typeWriter() {
    if (i < txt.length) {
        document.getElementById("variary").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        if (txt == 'Polls') {
            setTimeout(erase1, 1000);
        }
        else {
            setTimeout(erase2, 1000);
        }
    }
}

function erase1() {
    if (i >= 0) {
        var str = txt.toString();
        document.getElementById("variary").innerHTML = str.substring(0, i);
        i--;
        setTimeout(erase1, speed);
    }
    else {
        txt = 'Surveys.';
        setTimeout(typeWriter, 1000);
    }
}


function erase2() {
    if (i >= 0) {
        var str = txt.toString();
        document.getElementById("variary").innerHTML = str.substring(0, i);
        i--;
        setTimeout(erase2, speed);
    }
    else {
        txt = 'Polls.';
        setTimeout(typeWriter, 1000);
    }
}



typeWriter();

const githubredirect = document.getElementById("github-img");
githubredirect.addEventListener("click", () => {
    //new page
    window.open("https://github.com/CoHarsh", "_blank");

})








