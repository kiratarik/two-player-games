// Functions that are used in multiple games

function createGrid(x,y) {
  const grid = document.createElement("div")
  grid.className = "grid"

  const cell = document.createElement("div")
  cell.className = "cell"
  cell.style.width = (100 / x) + "%"
  cell.style.height = (100 / y) + "%"
  for (let i=0; i<x*y; i++) {
    grid.appendChild(cell)
  }
  return grid
}
export default createGrid