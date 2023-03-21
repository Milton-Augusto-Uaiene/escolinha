let userTexts = document.getElementsByClassName("uso-text");
let userPics = document.getElementsByClassName("uso-img"); 

function showReview() {
    for(userPic of userPics) {
        userPic.classList.remove("active-img");
    }

    for(userText of userTexts) {
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add("active-img");
    userTexts[i].classList.add("active-text");
}