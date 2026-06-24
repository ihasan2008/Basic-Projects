const button = document.querySelector(".ripple-btn");

button.addEventListener("click", function (event) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const size = Math.max (
        button.clientWidth,
        button.clientHeight
    );

    ripple.style.width = size + "px";
    ripple.style.height = size + "px";

    const rect = button.getBoundingClientRect();

    ripple.style.left = event.clientX - rect.left - size / 2 + "px";

    ripple.style.top = event.clientY - rect.top - size / 2 + "px";

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });

});