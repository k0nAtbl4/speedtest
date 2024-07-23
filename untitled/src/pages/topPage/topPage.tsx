import React from 'react';
import './topPage.css'
const leaderboardData = [
    { rank: 1, name: 'Player 1', score: 100 },
    { rank: 2, name: 'Player 2', score: 90 },
    { rank: 3, name: 'Player 3', score: 80 },
    { rank: 4, name: 'Player 4', score: 70 },
    { rank: 5, name: 'Player 5', score: 60 },
    { rank: 6, name: 'Player 6', score: 50 },
    { rank: 7, name: 'Player 7', score: 40 },
    { rank: 8, name: 'Player 8', score: 30 },
    { rank: 9, name: 'Player 9', score: 20 },
    { rank: 10, name: 'Player 10', score: 10 },
  ];
function TopPage() {
    return (
        <div>
            <div className="leaderboard">
                <h1>Leaderboard</h1>
                <ol>
                    {leaderboardData.map((player) => (
                        <li key={player.rank}>
                            <span className="player-rank">{player.rank}</span>
                            <span className="player-name">{player.name}</span>
                            <span className="player-score">{player.score}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default TopPage;