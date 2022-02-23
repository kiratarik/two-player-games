import React, { useState } from 'react';
import createGrid from "../lib/common"

function TicTacToe() {
  const grid = createGrid(3,3)
  const [count, setCount] = useState(0)
  const [result, setResult] = useState("")
  const [matrix, setMatrix] = useState([0,0,0,0,0,0,0,0,0])
  const cells = document.querySelectorAll(".cell")
  for (let i=0; i<cells.length; i++) {
    cells[i].onclick = {click}
    cells[i].name = i
  }

  function click(e) {
    const newMatrix = matrix
    if (count % 2 === 0) {
      e.target.classList.add("red")
      newMatrix[e.target.name] = 1
    } else if (count % 2 === 1) {
      e.target.classList.add("blue")
      newMatrix[e.target.name] = -1
    }
    e.target.onclick = {}
    setMatrix(newMatrix)
    setCount(count + 1)
  }

  function winCondition() {
    const scores = [
      matrix[0] + matrix[1] + matrix[2],
      matrix[3] + matrix[4] + matrix[5],
      matrix[6] + matrix[7] + matrix[8],
      matrix[0] + matrix[3] + matrix[6],
      matrix[1] + matrix[4] + matrix[7],
      matrix[2] + matrix[5] + matrix[8],
      matrix[0] + matrix[4] + matrix[8],
      matrix[2] + matrix[4] + matrix[6]
    ]
    for (let i=0; i < scores.length; i++) {
      if (scores[i] === 3) {
        return "Player 1 Wins!"
      } else if (scores[i] === -3) {
        return "Player 2 Wins!"
      }
    }
    return ""
  }

  React.useEffect(() => {
    const win = winCondition()
    if (win !== "") {
      setResult(win)
    } else if (count >=9) {
      setResult("Draw!")
    }
  }, [count])

  return (<section id="TicTacToe">
    <h1>Tic Tac Toe</h1>
    <h2>Player {(count % 2) + 1}'s turn:</h2>
    {!(result === "") && 
      <h2>{result}</h2>
    }
    <div class="board">
      {grid}
    </div>
  </section>)
}

export default TicTacToe