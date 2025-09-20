// file.js
document.querySelectorAll(".product-card button").forEach(btn=>{
  btn.onclick=()=>alert(btn.innerText+" clicked!");
});

let formBtn=document.querySelector(".contact-form button");
if(formBtn) formBtn.onclick=()=>alert("Message sent!");
