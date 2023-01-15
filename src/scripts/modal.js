//

export async function createDepartModal() {
  const createDepart = document.querySelector(".modal__Create-empresa");

  createDepart.innerHTML = `
  <div class="close">
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="modal-fix flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <div
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 font--inter">

          <div id="closeCreateDepart" class="modal-close">
            <img src="../../pages/img/close.svg" alt="">
          </div>

          <div class="title-1 text__align--R">Criar Departamento</div>

          <form id="create-depart" class="box__formulario gap">
            <p>
              <input class="box1--input text-5--modals form-selector" placeholder="Nome do departamento"
                id="depart" type="text" required="true" name=name>
            </p>

            <p>
              <input class="box1--input text-5--modals form-selector " placeholder="Descrição" id="desc"
                type="text" required="true" name=description>
            </p>

            <select class="text-5--modals form-selector" name="company_uuid" id="setor2">
              <option value="" selected>Selecionar Empresa</option>
            </select>

            <button id='btnCriarDepart' class="btn--cadastro button__5 text-1 size-100" type="submit">Criar o
              departamento</button>

              </form>

        </div>
      </div>
    </div>
  </div>
</div>

`;
}

export function modalCreateDepart() {
  const createDepart = document.querySelector(".modal__Create-empresa");
  const btnAbrirModal = document.querySelector(".createDepart");

  btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();

    createDepart.showModal();

    closeCreateDepart();
  });
}

export function closeCreateDepart() {
  const createDepart = document.querySelector(".modal__Create-empresa");
  const btnCloseModal = document.querySelector("#closeCreateDepart");

  btnCloseModal.addEventListener("click", () => {
    createDepart.close();
  });
}
//

export function openDepartModal() {
  const modalPage = document.querySelector("#DepartOpen");
  modalPage.innerHTML = `
  <div>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <div
          class="size__modal relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 font--inter">

          <div id="closeOpenDepart" class="modal-close">
            <img src="../../pages/img/close.svg" alt="">
          </div>

          <div id="titulo" class="title-1 text__align--R"></div>

          <form class="box__formulario gap margin40">
            <div class="modal__Depart info">

              <div class="modal__info desc">
                <h1 id="description" class="text-3"></h1>
                <span id="empresa" class="text-5"></span>
              </div>

              <div class="modal__info selector">

              <select class="text-4" name="selectUsers" id="departModalCreate">
              <option value="">Selecionar Usuário</option>
              </select>

                <button id="btnContratar" class="btn--cadastro button__3 text-1 color-1">Contratar</button>
              </div>

            </div>
            <div  class="modal__cards">
              <ul id="listUser">

              </ul>
            </div>
        </div>

      </div>
      </form>

    </div>
  </div>
</div>
</div>
</div>
`;
  closeOpenDepart();
}

export function closeOpenDepart() {
  const openDepart = document.querySelector("#DepartOpen");
  const btnCloseModal = document.querySelector("#closeOpenDepart");

  btnCloseModal.addEventListener("click", () => {
    openDepart.close();
  });
}

openDepartModal();

//

export function editDepartModal() {
  const editDepart = document.getElementById("editDepart");

  editDepart.innerHTML = `
  <div>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <div
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 font--inter">

          <div id="closeEditDepart" class="modal-close">
            <img src="../../pages/img/close.svg" alt="">
          </div>

          <div class="title-1 text__align--R">Editar Departamento</div>

          <form id="editFormDepart" class="box__formulario gap">




          </form>

        </div>
      </div>
    </div>
  </div>
</div>
`;
  closeEditDepart();
}

export function closeEditDepart() {
  const editDepart = document.querySelector("#editDepart");
  const btnCloseModal = document.querySelector("#closeEditDepart");

  btnCloseModal.addEventListener("click", () => {
    editDepart.close();
  });
}

editDepartModal();
//

export function delDepartModal() {
  const delDepart = document.querySelector("#delDepart");

  delDepart.innerHTML = `
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

      <div
        class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 font--inter">

        <div id="closeDelDepart" class="modal-close">
          <img src="../../pages/img/close.svg" alt="">
        </div>

        <div class="flex__delete__user">
          <p>
          <h1 class="title-1 espacamento-40">Realmente deseja deletar o Departamento $name e demitir seus
            funcionários?</h1>
          </p>

          <button class="btn--cadastro button__3 text-1 color-1 size-100">Deletar</button>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;
}

export function modalDelDepart() {
  const delDepart = document.querySelector("#delDepart");
  const btnAbrirModal = document.querySelector(".delDepart");

  btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();

    delDepart.showModal();

    closeDelDepartModal();
  });
}

export function closeDelDepartModal() {
  const delDepart = document.querySelector("#delDepart");
  const btnCloseModal = document.querySelector("#closeDelDepart");

  btnCloseModal.addEventListener("click", () => {
    delDepart.close();
  });
}

//

export function editUserModal() {
  const editUser = document.querySelector("#editUser");

  editUser.innerHTML = `
      <div>
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div
                class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 font--inter">

                <div id="closeEditUser" class="modal-close">
                  <img src="../../pages/img/close.svg" alt="">
                </div>

                <div class="title-1 text__align--R">Editar Usuário</div>

                <form id="editFormUser" class="box__formulario gap">

                  <select class="seletor box1--kind_of_work text-5--input" name="kind_of_work" id="kind_of_work">
                  <option value="kind" selected>Tipo</option>
                  <option value="home office">Home Office</option>
                  <option value="presencial">Presencial</option>
                  <option value="hibrido">Híbrido</option>
                </select>
  
                    <select class="seletor box1--senha text-5--input" name="professional_level" id="professional_level">
                    <option value="nivel" selected>Nível Profisional</option>
                    <option id="estágio" value="estágio">Estágio</option>
                    <option value="júnior">Junior</option>
                    <option value="sênior">Senior</option>
                    <option value="pleno">Pleno</option>
                  </select>

                  <button class="btn--cadastro button__2 text-1 color-1 size-100">Editar</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
`;
  closeEditUser();
}

export async function modalEditUser() {
  const editUser = document.querySelector("#editUser");
  const btnAbrirModal = document.querySelector(".editUser");

  btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();

    editUser.showModal();

    closeEditUser();
  });
}

export function closeEditUser() {
  const editUser = document.querySelector("#editUser");
  const btnCloseModal = document.querySelector("#closeEditUser");

  btnCloseModal.addEventListener("click", () => {
    editUser.close();
  });
}

editUserModal();
// modalEditUser();

//

export function delUserModal() {
  const delUser = document.querySelector("#delUser");

  delUser.innerHTML = `
  <div>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <div
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 font--inter">

          <div id="closeDelUser" class="modal-close">
          <img src="../../pages/img/close.svg" alt="">
        </div>

          <div class="flex__delete__user">
            <p>
            <h1 class="title-1 espacamento-40">Realmente deseja remover o usuário $Nome?</h1>
            </p>

            <button class="btn--cadastro button__3 text-1 color-1 size-100">Deletar</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

export function modalDelUser() {
  const editUser = document.querySelector("#delUser");
  const btnAbrirModal = document.querySelector(".delUser");

  btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();

    delUser.showModal();

    closeDelUser();
  });
}

export function closeDelUser() {
  const delUser = document.querySelector("#delUser");
  const btnCloseModal = document.querySelector("#closeDelUser");

  btnCloseModal.addEventListener("click", () => {
    delUser.close();
  });
}
