const div = document.querySelector("#dataContainer");
const button = document.querySelector("button");

function downoloadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані отримано!");
    }, 3000);
  });
}

button.addEventListener("click", async () => {
  div.textContent = "";

  button.disabled = true;
  button.textContent = "Завантаження...";

  const data = await downoloadData();
  div.textContent = data;
  button.disabled = false;
  button.textContent = "Завантажити";

  setTimeout(() => {
    div.textContent = "";
  }, 5000);
});
