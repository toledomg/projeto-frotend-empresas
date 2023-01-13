//  del Buttons

export async function btnDelUserDepart() {
  const adminPage = document.getElementById("user__container");

  const department = await getAllUser(token);
  adminPage.innerHTML = "";
  renderCardsDepart(department);
}
