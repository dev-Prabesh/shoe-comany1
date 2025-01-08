let menus = document.querySelector("#hamburger-icon")
let arrow = document.querySelector("#thearrow")
const toshow = document.querySelector("#themenu")

menus.addEventListener("click", () => {
    toshow.classList.remove("hidden")
})

arrow.addEventListener("click", () => {
    toshow.classList.add("hidden")

})