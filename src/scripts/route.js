import { getUser, validateUser } from "./request.js";

// export function renderLogin() {
//   const user = getUser();

//   if (user && user.is_admin) {
//     window.location.replace("/src/pages/dashboard.html");
//   } else if (user && !user.is_admin) {
//     window.location.replace("/src/pages/user.html");
//   }
// }
const user = getUser() || {};
const { token } = user;

export async function routeSecurity() {
  if (!token) {
    window.location.replace("/index.html");
  }
}
//
export async function routeAdmin() {
  const validation = await validateUser(token);

  if (!validation) {
    window.location.replace("/src/pages/dashboard.html");
  }
}
//
export async function routeUser() {
  const validation = await validateUser(token);

  if (validation) {
    window.location.replace("/src/pages/user.html");
  }
}
//
