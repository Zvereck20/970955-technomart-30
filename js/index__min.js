const MAP_OPEN=document.querySelector(".contacts__img"),MAP_POPAP=document.querySelector(".modal__map"),MAP_CLOSE=MAP_POPAP.querySelector(".map__close"),FEEDBACK_OPEN=document.querySelector(".contacts__button"),FEEDBACK_POPAP=document.querySelector(".modal__feedback"),FEEDBACK_CLOSE=FEEDBACK_POPAP.querySelector(".form__close"),openPopup=(e,P)=>{e.addEventListener("click",e=>{e.preventDefault(),P.classList.remove("visually-hidden")})},closePopup=(e,P)=>{e.addEventListener("click",e=>{e.preventDefault(),P.classList.add("visually-hidden")})};openPopup(MAP_OPEN,MAP_POPAP),closePopup(MAP_CLOSE,MAP_POPAP),openPopup(FEEDBACK_OPEN,FEEDBACK_POPAP),closePopup(FEEDBACK_CLOSE,FEEDBACK_POPAP);