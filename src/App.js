
import './App.css';

console.log(process.env.REACT_APP_OMDB_TEST);

fetch(process.env.REACT_APP_OMDB_TEST)
    .then(res => res.json())
    .then(data => console.log(data));

const App = () => {
  return (
    <>
      <h1>Test</h1>
    </>
  );
}

export default App;
