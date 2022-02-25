import React, { useEffect, useState } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);

    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
  }

useEffect(() => {
  fetchTours();
})

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }


  return (
    <div className="App">
      <main> <Tours /></main> 
      
                 
    </div>
  );
}

export default App;
