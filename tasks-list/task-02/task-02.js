const div = document.querySelector("#dataContainer");
const button = document.querySelector("button");

function downoloadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані отримано!");
    }, 3000);
  });
}

button.addEventListener("click", () => {
  button.disabled = true;
  button.textContent = "Завантаження...";

  downoloadData().then((data) => {
    div.textContent = data;
    button.disabled = false;
    button.textContent = "Завантажити";
  });

  setTimeout(() => {
    div.textContent = "";
  }, 5000);
});
