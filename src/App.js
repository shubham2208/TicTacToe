import React, { Component } from 'react';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <d69iv className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


// Create Main Game Board
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                {/*<div className="game-info">*/}
                    {/*<div>/!* status *!/</div>*/}
                    {/*<ol>/!* TODO *!/</ol>*/}
                {/*</div>*/}
            </div>
        );
    }
}

// Create Board
class Board extends Component{
    renderSquare(i) {
        return <Square />;
    }

    render() {
        //const status = 'Next player: X';

        return (
            <div>
                {/*<div className="status">{status}</div>*/}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Square extends Component{
    render() {
        return (
            <button className="square">

            </button>
        );
    }
}

export default Game;
