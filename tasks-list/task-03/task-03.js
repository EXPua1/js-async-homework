const div = document.querySelector("#results");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  button.disabled = true;
  button.textContent = "Завантаження...";

  Promise.all([
    WorkspaceResource1(),
    WorkspaceResource2(),
    WorkspaceResource3(),
  ]).then((data) => {
    div.textContent = data;
    button.disabled = false;
    button.textContent = "Запустити все";
  });
});

function WorkspaceResource1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ресурс 1 готовий");
    }, 1000);
  });
}

function WorkspaceResource2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ресурс 2 готовий");
    }, 2000);
  });
}

function WorkspaceResource3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ресурс 3 готовий");
    }, 3000);
  });
}
