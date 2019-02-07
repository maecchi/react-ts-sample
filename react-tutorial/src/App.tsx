import * as React from 'react';
import './App.css';
import Container from './containers/sampleContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
