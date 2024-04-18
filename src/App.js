
import './App.css';
import axios from 'axios';

console.log(process.env.REACT_APP_OMDB_TEST);

axios.get(process.env.REACT_APP_OMDB_TEST)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

const App = () => {
  return (
    <>
      <h1>Test</h1>
    </>
  );
}

export default App;
