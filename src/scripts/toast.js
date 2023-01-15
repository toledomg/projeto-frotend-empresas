export function toast(text, color) {
  Toastify({
    text: text,
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "right",
    style: {
      background: color,
    },
  }).showToast();
}

export const toasts = (type, message) => {
  const body = document.querySelector("body");

  const toast = document.createElement("div");
  toast.classList.add("toast");

  const h4 = document.createElement("h4");
  h4.className = "text-2 color-white100";
  h4.innerText = message;

  toast.appendChild(h4);

  if (type == "success") {
    toast.classList.add("color-green");
  } else {
    toast.classList.add("color-red");
  }

  body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
};

// cuteToast({
//   type: "error", // or 'info', 'error', 'warning'
//   title: "ERRO",
//   message: "Algo deu Errado, Tente Novamente",
//   timer: 5000,
// });

// cuteAlert({
//   type: "success",
//   title: "Success Title",
//   message: "Success Message",
//   buttonText: "Ok",
// });

// cuteAlert({
//   type: "error",
//   title: "Error Title",
//   message: "Error Message",
//   buttonText: "Okay",
// });
// cuteAlert({
//   type: "warning",
//   title: "Warning Title",
//   message: "Warning Message",
//   buttonText: "Okay",
// });
// cuteAlert({
//   type: "info",
//   title: "Info Title",
//   message: "Info Message",
//   buttonText: "Okay",
// }).then(() => {
//   // do something
// });

// cuteAlert({
//   type: "question",
//   title: "Confirm Title",
//   message: "Confirm Message",
//   confirmText: "Okay",
//   cancelText: "Cancel"
// }).then((e)=>{
//   if ( e == ("Thanks")){
// } else {
//     alert(":-(");
//   }
// })

// cuteToast({
//   type: "success", // or 'info', 'error', 'warning'
//   message: "Toast Message",
//   timer: 5000
// })
