let buttons = document.querySelectorAll(".product-card button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    alert(buttons[i].innerText + " clicked!");
  };
}

let formBtn = document.querySelector(".contact-form button");
if (formBtn) {
  formBtn.onclick = function() {
    alert("Message sent!");
  };
}
