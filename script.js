

function showSceneryBox(imgScource, heading, description){
    let d = document.getElementById("display");
    let e = document.getElementById("body");
    e.style.overflow = "hidden";
    document.addEventListener('mousemove', displayFollowCamera);
    d.style.left = event.clientX + 5 + "px";
    d.style.top = event.clientY + 5 + "px";
    d.innerHTML = "<div id='wrapper'><img id='imgid' src='" + imgScource + "'>" + "<p>" + heading  + "</p>" + description + "</p></div>";
}
function displayFollowCamera(){
    let a = document.getElementById('display');
    a.style.left = event.clientX + 5 + "px";
    a.style.top = event.clientY + 5 + "px";
}

function removeSceneryBox(){
    let a = document.getElementById("display");
    let b = document.getElementById("body");
    a.removeAttribute('style');
    b.removeAttribute('style');
    document.removeEventListener('mousemove', displayFollowCamera);
    a.removeChild(a.childNodes[0]);
}