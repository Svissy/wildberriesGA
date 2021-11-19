"use strict";

const cart = () => {
  const cartBtn = document.querySelector(".button-cart");
  const cartModal = document.getElementById("modal-cart");
  const cartClose = document.querySelector(".modal-close");

  cartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
  });

  cartClose.addEventListener("click", () => {
    cartModal.style.display = "";
  });
};

cart();