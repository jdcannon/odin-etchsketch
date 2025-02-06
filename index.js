const container = document.querySelector(".container");

function generateGrid(sideLength) {
  container.replaceChildren();
  let squares = sideLength*sideLength;
  let squareSize = 100 / sideLength;

  if (sideLength > 100 ) {
    squares = 10000;
    squareSize = 1;
  }
  for (let i = 0; i < squares; i++){
    const div = document.createElement("div");
    div.style.height = squareSize.toString() + "%";
    div.style.width = squareSize.toString() + "%";
    div.addEventListener("mouseenter", (e) => div.classList.add("drawn"));
    container.appendChild(div);
  }
}
function newGrid() {
  const squareEntry = document.querySelector("#squares");
  const value = parseInt(squareEntry.value);
  generateGrid(value);
}
document.querySelector("#new-canvas").addEventListener("click", newGrid);

generateGrid(24);