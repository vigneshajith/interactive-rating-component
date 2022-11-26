var container = document.querySelector(".container");
var thanks = document.querySelector(".thanks");
var submit = document.querySelector("#submitbtn");
var rating = document.querySelector("#user__rating");
var ratebtn = document.querySelectorAll(".num__circle");
submit.addEventListener("click", () => {
    thanks.classList.remove("hidden");
    container.style.cssText = "display:none";
})
ratebtn.forEach((ratebtn) => {
    ratebtn.addEventListener("click", () => {
        rating.innerHTML = ratebtn.innerHTML; 
    });
    
});
