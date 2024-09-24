"use strict";
const items = Array.from(document.querySelectorAll(".list-item__link"));
items.forEach((mainImage)=>{
    mainImage.addEventListener("click", (e)=>{
        e.preventDefault();
        document.querySelector("#largeImg").src = mainImage.href;
        document.querySelector("#largeImg").alt = mainImage.title;
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
