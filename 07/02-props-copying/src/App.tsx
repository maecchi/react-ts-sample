import * as React from 'react';
import CharacterList, { Character } from './CharacterList';

import './App.css';

class App extends React.Component {
  render() {
    const characters: Character[] = [
      {
        name: '羽咲 綾乃',
        age: 16,
        height: 151,
      },
      {
        name: '荒垣 なぎさ',
        age: 18,
        height: 174,
      },
      {
        name: '泉 理子',
        age: 16,
      },
    ];

    return (
      <div className="container">
        <header>
          <h1>はねバト！　キャラクター一覧</h1>
        </header>
        <CharacterList school="北野町高校" characters={characters} />
      </div>
    );
  }
}

export default App;
