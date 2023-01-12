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

// createDepartModal();
// modalCreateDepart();

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

          <div class="title-1 text__align--R">Nome do Departamento</div>

          <form class="box__formulario gap margin40">
            <div class="modal__Depart info">

              <div class="modal__info desc">
                <h1 class="text-3">Descrição do departamento</h1>
                <span class="text-5">Empresa pertencente</span>
              </div>

              <div class="modal__info selector">

              <select class="text-4" name="" id="departModalCreate">
              <option value="">Selecionar Usuário</option>
              </select>

                <button class="btn--cadastro button__3 text-1 color-1">Contratar</button>
              </div>

            </div>
            <div class="modal__cards">
              <ul>

                <!-- Cards -->
                <li>
                  <div>
                    <div class="modal__cards--title">
                      <h1 class="text-1">$Usuário</h1>
                      <p>$nivel</p>
                      <p>$empresa</p>
                    </div>
                    <button class="btn--cadastro button__4 text-1 color-4">Desligar</button>
                  </div>
                </li>

                <!-- Cards -->
                <li>
                  <div>
                    <div class="modal__cards--title">
                      <h1 class="text-1">$Usuário</h1>
                      <p>$nivel</p>
                      <p>$empresa</p>
                    </div>
                    <button class="btn--cadastro button__4 text-1 color-4">Desligar</button>
                  </div>
                </li>

                <!-- Cards -->
                <li>
                  <div>
                    <div class="modal__cards--title">
                      <h1 class="text-1">$Usuário</h1>
                      <p>$nivel</p>
                      <p>$empresa</p>
                    </div>
                    <button class="btn--cadastro button__4 text-1 color-4">Desligar</button>
                  </div>
                </li>

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
}

export function modalOpenDepart() {
  const openDepart = document.querySelector("#DepartOpen");
  const btnAbrirModal = document.querySelector(".openDepart");

  // console.log(openDepart);
  // console.log(btnAbrirModal);

  btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();

    openDepart.showModal();

    closeOpenDepart();
  });
}

export function closeOpenDepart() {
  const openDepart = document.querySelector("#DepartOpen");
  const btnCloseModal = document.querySelector("#closeOpenDepart");
  console.log(openDepart);

  btnCloseModal.addEventListener("click", () => {
    openDepart.close();
  });
}

// modalOpenDepart();
// openDepartModal();

//

export function editDepartModal() {
  const editDepart = document.querySelector("#editDepart");

  editDepart.innerHTML = `
  <div>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

        <div
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 font--inter">

          <div id="closeEditDepart" class="modal-close">
            <img src="./img/close.svg" alt="">
          </div>

          <div class="title-1 text__align--R">Editar Departamento</div>

          <form class="box__formulario gap">

            <p>
              <input class="box1--input text-5--modals form-selector edit--desc"
                placeholder="descricao_empresa" id="desc" type="text" required="true" name=desc>
            </p>

            <button class="btn--cadastro button__2 text-1 color-1 size-100">Salvar Alterações</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</div>
`;
}

export function modalEditDepart() {
  const editDepart = document.querySelector("#editDepart");
  const btnAbrirModal = document.querySelector(".editDepart");

  btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();

    editDepart.showModal();

    closeEditDepart();
  });
}

export function closeEditDepart() {
  const editDepart = document.querySelector("#editDepart");
  const btnCloseModal = document.querySelector("#closeEditDepart");

  btnCloseModal.addEventListener("click", () => {
    editDepart.close();
  });
}

// modalEditDepart();
// editDepartModal();
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
          <img src="./img/close.svg" alt="">
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

// delDepartModal();
// modalDelDepart();

//

//
//

export function criarUserModal() {
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
                  <img src="./img/close.svg" alt="">
                </div>

                <div class="title-1 text__align--R">Editar Usuário</div>

                <form class="box__formulario gap">

                  <select class="text-5--modals form-selector" name="" id="setor">
                    <option value="pt" selected>Selecionar modalidade de trabalho</option>
                    <option value="presencial">Presencial</option>
                    <option value="home-office">Home Office</option>
                    <option value="hibrído">Hibrído</option>
                  </select>

                  <select class="text-5--modals form-selector" name="" id="setor">
                    <option value="pt" selected>Selecionar nível profissional</option>
                    <option value="júnior">Júnior</option>
                    <option value="estágio">Estágio</option>
                    <option value="sênior">Sênior</option>
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
}

export function modalEditUser() {
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

// criarUserModal();
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
          <img src="./img/close.svg" alt="">
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

// delUserModal();
// modalDelUser();

//
