let btn = document.querySelector(".btn");
let primaryScreen = document.querySelector(".screen-primary");
let thankYouScreen = document.querySelector(".screen-thank-you");
let rate = document.querySelectorAll(".rate");
let rateSelected = document.querySelector('.rate-selected');

let lastClickedRate = null;

rate.forEach((div) => {
    div.addEventListener('click', function() {
        if (lastClickedRate) {
            lastClickedRate.style.backgroundColor = 'hsl(217, 10%, 35%)'; // Restore the initial style of the last clicked div
            lastClickedRate.style.color = "hsl(217, 12%, 63%)";
        }

        this.style.backgroundColor = 'hsl(25, 97%, 53%)'; // Change the style of the currently clicked div
        this.style.color = "#fff";
        lastClickedRate = this; // Updates reference to last clicked div

        rateSelected.textContent = div.dataset.value; // save the data value of the selected rate
    }); 
});

btn.addEventListener("click", () => {
    primaryScreen.style.display = "none"; 
    thankYouScreen.style.display = "initial";
} );