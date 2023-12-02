import { Component } from 'react';
class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>hola</h1>
      </div>
    );
  }
}

export default App;
