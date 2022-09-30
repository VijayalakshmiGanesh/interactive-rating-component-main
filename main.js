var button = document.querySelector(".submit-btn");
var ratings_btn = document.querySelectorAll(".ratings");
var rating_state = document.querySelector(".rating-state");
var thanks_state = document.querySelector(".thankyou-state");
var selection_rating = document.querySelector(".selection-rating");

var ratingvalue;
ratings_btn.forEach(element => {
    element.addEventListener("click", () => {
        ratingvalue = element.innerText;
    })
});
button.addEventListener("click", () => {
    if (!ratingvalue) {
        alert("select rating");
        return
    }


    rating_state.style.display = "none";
    thanks_state.style.display = "block";
    selection_rating.innerText = ratingvalue;

})

