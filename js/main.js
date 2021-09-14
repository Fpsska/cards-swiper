document.addEventListener("DOMContentLoaded", () => {

    let activeSlide = (currentSlide = 0) => {           // /. add active class

        let slides = document.querySelectorAll(".slide");

        slides[currentSlide].classList.add("active")

        slides.forEach(item => {
            item.addEventListener("click", () => {
                slides.forEach(item => {
                    item.classList.remove("active")
                })
                item.classList.add("active");
            })
        })
    }

    activeSlide()

});

