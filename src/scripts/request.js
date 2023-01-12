import { toast } from "./toast.js";
// import { axiosInstance } from "./axios.js";
const red = "#d65745";
const green = "#55b938";
const user = getUser() || {};
let { token } = user;
const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const baseUrl = "http://localhost:6278";

// //  //
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
  const loginData = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(data), //Corpo da Requisição, em formato JSON
  });

  const loginDataJson = await loginData.json();
  setLocalStorage("@kenzie:user", loginDataJson);

  return loginData;
}

export async function createUser(data) {
  const userData = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return userData;
}

//  for Companies

export async function getAllDepart(token) {
  const responseJson = await fetch(baseUrl + `/departments`, {
    method: "GET",
    headers: requestHeaders,
  });

  document.getElementById("departInfo").style.display = "none";
  const response = await responseJson.json();
  // console.log(response);
  return response;
}

export async function getAllCompanies() {
  const responseJson = await fetch(baseUrl + `/companies`, {
    method: "GET",
    headers: requestHeaders,
  });

  const response = await responseJson.json();
  // console.log(typeof response);
  return response;
}

/**/
// request for modal listar departs
export async function listDepartCompanies(token, id) {
  const responseJson = await fetch(baseUrl + `/departments/${id}`, {
    method: "GET",
    headers: requestHeaders,
  });

  const response = await responseJson.json();

  return response;
}

//
//  for Users / Buscar todos os usuários
export async function getAllUsers(token) {
  const responseJson = await fetch(baseUrl + `/users`, {
    method: "GET",
    headers: requestHeaders,
  });

  const response = await responseJson.json();

  return response;
}

// Aguardando Vagas / desempregado
export async function getUseDesempregado(token) {
  const responseJson = await fetch(baseUrl + "/admin/out_of_work", {
    method: "GET",
    headers: requestHeaders,
  });

  const response = await responseJson.json();

  return response;
}

export async function getUseEmpregado(token) {
  const responseJson = await fetch(baseUrl + "/admin/out_of_work", {
    method: "GET",
    headers: requestHeaders,
  });

  const response = await responseJson.json();

  return response;
}

//  Departs

export async function SelectModalDepart() {
  const select = document.querySelector("#departModalCreate");

  const sections = await getUseDesempregado();

  sections.forEach((e) => {
    const option = document.querySelector("option");
    option.value - e.username;
    option.id = e.uuid;
    option.innerText = e.username;

    select.appendChild(option);
  });
}

export async function createDepartAdmin(token, body) {
  const responseJson = await fetch(`${baseUrl}/departments`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(body),
  });

  const response = await responseJson.json();

  if (responseJson.ok) {
    toast("sucess", "Departamento Criado com Sucesso");
  } else {
    toast("error", "Algo deu Errado, Tente Novamente");
  }
  return response;
}

export async function deleteDepartAdmin(token, id) {
  const responseJson = await fetch(`${baseUrl}/departments/${id}`, {
    method: "DELETE",
    headers: requestHeaders,
  });

  if (responseJson.ok) {
    toast("sucess", "Departamento Deletado com Sucesso");
  } else {
    toast("error", "Algo deu Errado, Tente Novamente");
  }
}

//
