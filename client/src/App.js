import React from 'react';
import './App.css';
import UserStats from './components/UserStats';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>GitHub Stats Web Service</h1>
                <UserStats />
            </header>
        </div>
    );
}

export default App;
