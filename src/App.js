import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { fetchData } from './fakeDb';

function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetchData().then(response => setUserData(response));
  }, []);

  console.log('userData: ', userData);

  return (
    <div className="App">
      {/* <Counter /> */}
      <Header />
    </div>
  );
}

export default App;
