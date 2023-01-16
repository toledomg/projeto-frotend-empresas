import { toast, toasts } from "./toast.js";
import { adminSecurity, userSecurity, homeDirection } from "./security.js";
// import { usersPageUser } from "../pages/users/user.js";

// import { btnDelDepart } from "./render.js";

const red = "#d65745";
const green = "#55b938";
const user = getUser() || {};
let { token } = user;
const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const baseUrl = "http://localhost:6278";

export async function setTime(tempo) {
  setTimeout(() => {
    location.reload();
  }, tempo);
}

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
  // console.log(response.is_admin);
  return response.is_admin;
}

//

export async function login(data) {
  const responseJson = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(data), //Corpo da Requisição, em formato JSON
  });

  const response = await responseJson.json();

  if (responseJson.ok) {
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Usuário Logado com Sucesso",
      timer: 3000,
    });

    setLocalStorage("@kenzie:user", response);
    const validation = await validateUser(token);

    if (validation) {
      setTimeout(() => {
        window.open("../pages/admin.html", "_parent");
      }, 3000);
    } else {
      setTimeout(() => {
        window.open("../pages/users/user.html", "_parent");
      }, 3000);
    }
  } else {
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message: "Algo deu Errado, Tente Novamente",
      timer: 3000,
    });
  }

  return response;
}

export async function createUser(data) {
  const responseJson = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(data),
  });
  const response = await responseJson.json();

  if (responseJson.ok) {
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Cadastro Criado com Sucesso",
      timer: 3000,
    });

    setLocalStorage("@kenzie:user", response);
    const validation = await validateUser(token);

    if (validation) {
      setTimeout(() => {
        window.open("../pages/admin.html", "_parent");
      }, 3000);
    } else {
      setTimeout(() => {
        window.open("../pages/users/user.html", "_parent");
      }, 3000);
    }
  } else {
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message: "Algo deu Errado, Tente Novamente",
      timer: 5000,
    });
  }

  return response;
}

//  for Companies

export async function getAllDepart(token) {
  const responseJson = await fetch(`${baseUrl}/departments`, {
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
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Departamento Criado com Sucesso",
      timer: 5000,
    });
  } else {
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message: "Algo deu Errado, Tente Novamente",
      timer: 5000,
    });
  }
  return response;
}

export async function deleteDepartAdmin(token, id) {
  const responseJson = await fetch(`${baseUrl}/departments/${id}`, {
    method: "DELETE",
    headers: requestHeaders,
  });

  if (responseJson.ok) {
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Departamento Excluído com Sucesso",
      timer: 5000,
    });
  } else {
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message: "Algo deu Errado, Tente Novamente",
      timer: 5000,
    });
  }
}

export async function editDepartAdmin(token, id, body) {
  const responseJson = await fetch(`${baseUrl}/departments/${id}`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(body),
  });

  const response = await responseJson.json();

  if (responseJson.ok) {
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Departamento Editado com Sucesso",
      timer: 5000,
    });
  } else {
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message: "Algo deu Errado, Tente Novamente",
      timer: 5000,
    });
  }
  return response;
}

/**/

export async function dimissUserDepart(token, id) {
  const responseJson = await fetch(baseUrl + `/departments/dismiss/${id}`, {
    method: "PATCH",
    headers: requestHeaders,
  });

  const response = await responseJson.json();

  if (responseJson.ok) {
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Usuário Desligado com Sucesso",
      timer: 5000,
    });
  } else {
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message: "Algo deu Errado, Tente Novamente",
      timer: 5000,
    });
  }
  return response;
}

export async function hireUserDepart(token, body) {
  const responseJson = await fetch(`${baseUrl}/departments/hire`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(body),
  });

  const response = await responseJson.json();

  if (responseJson.ok) {
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Usuário Desligado com Sucesso",
      timer: 5000,
    });
  } else {
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message: "Algo deu Errado, Tente Novamente",
      timer: 5000,
    });
  }
  return response;
}

// USers na home Admin

export async function editUserAdmin(token, id, body) {
  const responseJson = await fetch(`${baseUrl}/admin/update_user/${id}`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(body),
  });

  const response = await responseJson.json();

  if (responseJson.ok) {
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Usuário Editado com Sucesso",
      timer: 5000,
    });
  } else {
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message: "Algo deu Errado, Selecione os dois campos por favor",
      timer: 5000,
    });
  }
  return response;
}

export async function deleteUserAdmin(token, id) {
  const responseJson = await fetch(`${baseUrl}/admin/delete_user/${id}`, {
    method: "DELETE",
    headers: requestHeaders,
  });

  if (responseJson.ok) {
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Usuário Excluído com Sucesso",
      timer: 5000,
    });
  } else {
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message: "Algo deu Errado, Tente Novamente",
      timer: 5000,
    });
  }
}
//

//  users

export async function getPerfilUser(token) {
  const responseJson = await fetch(`${baseUrl}/users/profile`, {
    method: "GET",
    headers: requestHeaders,
  });

  const response = await responseJson.json();

  return response;
}

export async function getCoWorkers(token) {
  const responseJson = await fetch(`${baseUrl}/users/departments/coworkers`, {
    method: "GET",
    headers: requestHeaders,
  });

  const response = await responseJson.json();

  return response;
}

export async function getDepartUser(token) {
  const responseJson = await fetch(`${baseUrl}/users/departments`, {
    method: "GET",
    headers: requestHeaders,
  });

  const response = await responseJson.json();

  return response;
}

export async function editUser(token, body) {
  const responseJson = await fetch(`${baseUrl}/users`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(body),
  });

  const response = await responseJson.json();

  if (responseJson.ok) {
    cuteToast({
      type: "success", // or 'info', 'error', 'warning'
      title: "SUCESSO",
      message: "Usuário Editado com Sucesso",
      timer: 5000,
    });
  } else {
    if (response.error.includes("email")) {
      cuteToast({
        type: "warning", // or 'info', 'error', 'warning'
        title: "ATENÇÃO",
        message: "Email já cadastrado, Tente novamente com outro Email",
        timer: 5000,
      });
    } else {
      cuteToast({
        type: "error", // or 'info', 'error', 'warning'
        title: "ERRO",
        message: "Algo deu Errado, Tente Novamente",
        timer: 5000,
      });
    }
  }
  return response;
}
