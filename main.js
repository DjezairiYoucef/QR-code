let btn = document.querySelector(".btn");
let URL_input = document.querySelector(".URL");
let QRImg = document.querySelector("#QRImg");
let erroralt = document.querySelector(".alt");

function GetQR() {
  let inputValue = URL_input.value;
  QRImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
}

btn.addEventListener("click", () => {
  if (!URL_input.value) {
    QRImg.style.display = "none";
    erroralt.style.display = "block";
  } else {
    QRImg.style.display = "block";
    erroralt.style.display = "none";
  }
  GetQR();
});
