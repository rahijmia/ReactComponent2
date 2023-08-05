import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  const personStyle={
    border:'2px solid red',
    margin:'10px'
  }

  return ( 
  <div style={{border: '2px solid yellow',margin:'10px'}}>
  <h1>Name:Sakib Al Hasan</h1>
  <h3>Hero of the Year</h3>
  </div>
  )
  
  }
export default App;
