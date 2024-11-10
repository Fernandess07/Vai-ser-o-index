import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Card from './Components/Card';
import './App.css';

function App() {
  // Estado para manter a lista de cards
  const [cardId, setCardId] = useState(0);
  const [cards, setCards] = useState([...Array(6)]);
  
  //[...Array(6)] - Exemplo inicial com 6 cards

  return (
    <div className="app">
      <header className="header">
        <SearchBar />
        <div className="buttons">
          <a className="button" href='vscode://'>VCode</a>
          <a className="button" href='http://localhost/phpmyadmin/'>MySQL</a>
          <button className="button">ADD</button>
        </div>
      </header>
      

        {/* Condicional para exibir cards ou a mensagem "Não tens projetos" */}
        {cards.length > 0 ? (
          <div className="card-grid">
            {cards.map((_, index) => (
              <Card key={index} cardId = {index}/>
            ))}
          </div>
        ) : (
          <h1 className="no-projects-message">Não tens projetos</h1>
        )}
      
    </div>
  );
}

export default App;
