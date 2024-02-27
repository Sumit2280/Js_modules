// 1.  Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript

document.querySelectorAll('p').forEach(p => {
  p.innerText = "How’s the Josh?";
});

// 2. Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x

const button = document.createElement("button");
document.getElementById("top-row").appendChild(button);
button.innerHTML = "10x";
button.addEventListener("click",()=>{document.querySelector('video').playbackRate = 10.0});
