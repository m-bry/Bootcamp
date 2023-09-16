import {useState, useEffect} from 'react';
//I did this very late into the night, but I believe that origninally the line:
//import Table from './Table' was incorrect. I added the '.jsx' to be more specific.
import Table from './Table.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [persons, setPersons] = useState([]);
  
  useEffect(()=>{
        //defining endpoint, then passing endpoint as an argument
        const endpoint = 'https://swapi.dev/api/people/'
        fetch(endpoint)
          //Missing initial .then where the response is parsed
          .then(response => response.json())
          .then(data => setPersons(data.results))
          .catch(error => console.log("Error loading ", persons, error));
    }, []);

  return (
    <Table persons={ persons } />
  );
};

export default App;
