export function renderFooter() {
  const footer = document.querySelector("#footer");

  const div = document.createElement("div");
  const p = document.createElement("p");
  const small = document.createElement("small");
  const span = document.createElement("span");
  const a = document.createElement("a");
  const aGit = document.createElement("a");

  div.classList.add("copyright");

  small.innerText = "T15 - M2 - Jan/2023 - ";

  a.target = "_blank";
  a.href = "https://www.linkedin.com/in/toledomg/";
  a.innerText = "Toledomg";

  aGit.href =
    "https://github.com/Kenzie-Academy-Brasil-Developers/petinfobase-toledomg";
  aGit.innerText = " - S7-01 🏆 Projeto FrontEnd - Kenzie Empresas";

  p.append(small);

  small.append(span, aGit);
  span.appendChild(a);
  div.appendChild(p);

  footer.appendChild(div);

  return footer;
}

// renderFooter();
