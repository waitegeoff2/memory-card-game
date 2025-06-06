import '../styles/headerStyles.css'

export default function Header({score, highScore}) {
    return (
        <div className="header">
                <div className="title">
                    <h1 className="game-title">Memory Game</h1>
                    <h2 className="subtitle">Click pictures, but don't click the same one twice!</h2>
                </div>
                <div className="scores">
                    <p className="score">Score: {score}</p>
                    <p className="high-score">High score: {highScore}</p>
                </div>
        </div>
    )
}

//header for title and score of game,