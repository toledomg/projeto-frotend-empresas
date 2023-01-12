import { toast } from "./toast.js";

const user = getUser() || {};
const { token } = user;
const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const baseUrl = "http://localhost:6278";
const green = "#ce4646";
const red = "#4ba036";

// //  //
export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getUser() {
  const user = JSON.parse(localStorage.getItem("@kenzie:user"));

  return user;
}
//

export async function validateUser(token) {
  const responseJson = await fetch(`${baseUrl}/auth/validate_user`, {
    method: "GET",
    headers: requestHeaders,
  });
  const response = await responseJson.json();
  console.log(response.is_admin);
  return response.is_admin;
}

//

export async function login(data) {
  const loginData = await fetch(baseUrl + `/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (loginData.ok) {
    const loginDataJson = await loginData.json();
    // setLocalStorage("@kenzie:user", loginDataJson);
    localStorage.setItem("@kenzie:user", JSON.stringify(loginDataJson));

    const userType = await validateUser(token);
    console.log(userType);
    if (true) {
      alert("Usuário Admin, Logado Com Sucesso");
      setTimeout(() => {
        window.location.replace("./dashboard.html");
      }, 1000);
    }
  } else {
    alert("Usuario, Logado Com Sucesso");
    setTimeout(() => {
      window.location.replace("./user.html");
    }, 1000);
  }

  return loginData;
}

export async function createUser(data) {
  const userData = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return userData;
}

export async function createEmpresa(data) {
  const user = getUser();
  const { token } = user;

  const empresa = await fetch(`${baseUrl}/companies)`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const empresaJson = await empresa.json();

  if (!empresa.ok) {
    toast(empresaJson.error, red);
  } else {
    toast(empresaJson.error, green);
  }
}
