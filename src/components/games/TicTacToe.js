import React, { useState } from 'react';

function TicTacToe() {
  const arr = [0,1,2,3,4,5,6,7,8]
  const [count, setCount] = useState(0)
  const [result, setResult] = useState("")
  const [matrix, setMatrix] = useState([0,0,0,0,0,0,0,0,0])

  async function click(e) {
    const id = Number(e.target.id)
    if (matrix[id] === 0 && result === "") {
      const newMatrix = matrix
      console.log(count % 2)
      if (count % 2 === 0) {
        e.target.classList.add("red")
        newMatrix[id] = 1
      } else if (count % 2 === 1) {
        e.target.classList.add("blue")
        newMatrix[id] = -1
      }
      console.log(newMatrix)
      setMatrix(newMatrix)
      setCount(count + 1)
    }
    
  }

  function reset() {
    // window.location.reload()
    setCount(0)
    setResult("")
    setMatrix([0,0,0,0,0,0,0,0,0])
    const cells = document.querySelectorAll(".cell")
    for (let i=0; i<cells.length; i++) {
      cells[i].className = "cell"
    }
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

  }, [])

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
    {(result === "") && 
      <h2>Player {(count % 2) + 1}'s turn:</h2>
    }
    {!(result === "") && 
      <h2>{result}</h2>
    }
    <div className="board">
      {arr.map((num) => (
        <div key={num} id={num} className="cell" onClick={click}>
        </div>
      ))}
    </div>
    <button onClick={reset}>Reset</button>
  </section>)
}

export default TicTacToe