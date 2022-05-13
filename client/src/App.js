import { useState, useEffect } from 'react';
import MainPage from './mainPage/MainPage';
import RingLoader from 'react-spinners/RingLoader';
import './App.scss';

function App() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.onload = () => {
      setLoading(false);
    }
  }, [])

  return (
    <div className="App">
      {
        loading ? 
          <RingLoader
          className='loader'
          size={100}
          color={'#123abc'}
          loading={loading}
        />
        : <MainPage />
      }
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
