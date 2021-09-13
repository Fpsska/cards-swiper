document.addEventListener("DOMContentLoaded", () => {
    let slide = document.querySelectorAll(".slide");
    slide.forEach(item => {
        item.addEventListener("click", () => {
            slide.forEach(item => {
                item.classList.remove("active")
            })
            item.classList.add("active");
        })
    })
    // /. add active class
});