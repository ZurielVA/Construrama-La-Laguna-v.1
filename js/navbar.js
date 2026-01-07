document.addEventListener("DOMContentLoaded", function () {
    let offcanvasMenu = document.getElementById("offcanvasMenu");
    let menuLinks = document.querySelectorAll(".close-offcanvas");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            let offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasMenu);
            if (offcanvasInstance) {
                offcanvasInstance.hide();
            }
        });
    });
});
