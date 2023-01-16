import { renderFooter } from "./footer.js";

renderFooter();

// direct Page Login

export function btnLoginDirectCad() {
  const btnLogin = document.querySelector(".btn--login");
  btnLogin.addEventListener("click", () => {
    window.open("/", "_parent");
    window.open("./src/pages/login.html", "_parent");
  });
}
// btnLoginDirectCad();

export function btnCadDirect() {
  const btnLogin = document.getElementById("btnCadastro");
  btnLogin.addEventListener("click", () => {
    window.open("./cadastro.html", "_parent");
  });
}
// btnCadDirect();

export function btnHomeDirect() {
  const btnLogin = document.getElementById("btnHome");
  btnLogin.addEventListener("click", () => {
    window.open(".../index.html", "_parent");
  });
}
// btnHomeDirect();
