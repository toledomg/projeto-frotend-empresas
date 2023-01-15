export async function editPerfilModal() {
  const editPerfil = document.querySelector("#editPerfil");

  editPerfil.innerHTML = `
    <div>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div
            class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 font--inter">

            <div id="closeEditPerfil" class="modal-close">
              <img src="../../pages/img/close.svg" alt="">
            </div>

            <div class="title-1 text__align--R">Editar Perfil</div>

            <form id="editUserDash" class="box__formulario gap">
              <p>
                <input class="box1--input text-5--modals form-selector" placeholder="Seu nome" id="name" type="text"
                  required="true" name=name>
              </p>

              <p>
                <input class="box1--input text-5--modals form-selector" placeholder="Seu e-mail" id="email"
                  type="text" required="true" name=email>
              </p>

              <p>
                <input class="box1--input text-5--modals form-selector" placeholder="Sua Senha" id="password"
                  type="text" required="true" name=password>
              </p>

              <button class="btn--cadastro button__2 text-1 color-1 size-100">Editar Perfil</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
 `;
  closeEditPerfil();
}

// export async function modalEditPerfil() {
//   const editPerfil = document.querySelector("#editPerfil");
//   const btnAbrirModal = document.querySelector("#editBtn");

//   btnAbrirModal.addEventListener("click", (e) => {
//     e.preventDefault();

//     editPerfil.showModal();

//     closeEditPerfil();
//   });
// }

export function closeEditPerfil() {
  const editPerfil = document.querySelector("#editPerfil");
  const btnCloseModal = document.querySelector("#closeEditPerfil");

  btnCloseModal.addEventListener("click", () => {
    editPerfil.close();
  });
}

// editPerfilModal();
// modalEditPerfil();
