var swiper=new Swiper(".mySwiper",{spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,e){return`<button class="${e} slider__button" data-slide-index="${t}"></button>`}},keyboard:!0}),paginationButtons=document.querySelectorAll(".slider__button");paginationButtons.forEach((function(t){t.addEventListener("click",(function(){var t=parseInt(this.getAttribute("data-slide-index"));swiper.slideTo(t)}))})),swiper.on("slideChange",(function(){var t=swiper.activeIndex;paginationButtons.forEach((function(t){t.classList.remove("active")})),paginationButtons[t].classList.add("active")}));