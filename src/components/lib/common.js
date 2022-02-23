// Functions that are used in multiple games

function createGrid(x,y) {
  const grid = document.createElement("div")
  grid.className = "grid"

  for (let i=0; i<x*y; i++) {
    const cell = document.createElement("div")
    cell.className = "cell"
    cell.style.width = (100 / x) + "%"
    cell.style.height = (100 / y) + "%"
  
    grid.appendChild(cell)
  }
  console.log(grid)
  return grid
  // return <div></div>
}
export default createGrid