function showSceneryBox(imgSource, heading, description){
    a = document.getElementById('display');
    a.innerHTML = `<div id='wrapper'><img id = 'imgid' src="${imgSource}" height="200" width="350"><h3>${heading}</h3><p>${description}</p></div>`;
    a.style.display = 'block';
    document.addEventListener('mousemove', displayFollowCamera);
}

function displayFollowCamera() {
    wrapper = document.getElementById('display');
    wrapper.style.top = `${event.clientY + 2}px`;
    wrapper.style.left = `${event.clientX + 2}px`;
}

function removeSceneryBox() {
    a = document.getElementById('display');
    a.style.display = 'none';
    document.removeEventListener('mousemove', displayFollowCamera);
}            