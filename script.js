
// document.addEventListener("DOMContentLoaded", function() {

//     const plusIcons = document.querySelectorAll(".plus-icon");

//     plusIcons.forEach(function(plusIcon) {
//         plusIcon.style.cursor = "pointer";

//         plusIcon.addEventListener("click", function() {
//                                                 //find container
//             const container = plusIcon.closest(".faq-item");
//                                                 //find paragraph
//             const content = container.querySelector(".pcontent");

//             if (content) {
//                 content.classList.toggle("active");

//                 if (content.classList.contains("active")) {
//                     content.style.display = "block";
//                     plusIcon.src = "/assets/images/icon-minus.svg"; // Change icon to minus
//                 } else {
//                     content.style.display = "none";
//                     plusIcon.src = "/assets/images/icon-plus.svg"; // Change icon to plus
//                 }
//             }
//         })
// });
// });

document.addEventListener("DOMContentLoaded", function() {

    const plusIcons = document.querySelectorAll(".plus-icon");

    plusIcons.forEach(function(plusIcon) {
        plusIcon.style.cursor = "pointer";

        plusIcon.addEventListener("click", function() {
                                                //find container
            const container = plusIcon.closest(".faq-item");
                                                //find paragraph
            const content = container.querySelector(".pcontent");

            if (content) {
                content.classList.toggle("active");

                if (content.classList.contains("active")) {
                    content.style.display = "block";
                    plusIcon.src = "/assets/images/icon-minus.svg"; // Change icon to minus
                } else {
                    content.style.display = "none";
                    plusIcon.src = "/assets/images/icon-plus.svg"; // Change icon to plus
                }
            }
        })
});
});

