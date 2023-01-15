import { getUser, validateUser } from "./request.js";

// variaveis globais
const user = getUser() || {};
let { token } = user;

console.log(token);

export async function homeDirection() {
  if (!token) {
    window.open("../login.html", "_parent");
  }
}

export async function adminSecurity() {
  const validation = await validateUser(token);
  if (!validation) {
    window.open("../users/user.html", "_parent");
  }
}

export async function userSecurity() {
  const validation = await validateUser(token);
  if (validation) {
    window.open("../admin/admin.html", "_parent");
  }
}
