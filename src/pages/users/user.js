import { getUser, getPerfilUser } from "../../scripts/request.js";

// Var Globais
const user = getUser() || {};
let { token } = user;

//
export async function renderPageUser(token) {
  const info = document.getElementById("userInfo");
  const e = await getPerfilUser(token);
  console.log(e);

  info.insertAdjacentHTML(
    "beforeend",
    `
<div>
<h1 class="text-1">
${e.username}
</h1>
<a>
  <img id="editBtn" src="../../pages/img/edit_black.svg" alt="btn-edit">
</a>
</div>

<div>
<h2>
Email: ${e.email}
</h2>
${e.professional_level}
<h2>
</p>
${e.kind_of_work}
</div>

`
  );

  return info;
}

renderPageUser(token);
