const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
filenames = [];
for(let i = 1; i <= 5; i++) {
    filenames.push(`./images/pic${i}.jpg`);
}

/* Declaring the alternative text for each image file */
alts = ['', '', '', '', ''];

/* Looping through images */
for(let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', alts[i]);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    }
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
    if(btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}