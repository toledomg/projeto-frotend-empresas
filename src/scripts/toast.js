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
