import { useEffect, useState } from 'react';
import './App.css';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://nspliykjvdenjjunptiu.supabase.co', process.env.REACT_APP_SUPABASE_KEY)


function App() {
  console.log(process.env.SUPABASE_KEY)
  const [spruch, setSpruch] = useState([]);

  useEffect(() => {
    getRandomSpruch();
  }, []);

  async function getRandomSpruch() {
    const randomSpruchId = Math.floor(Math.random() * 50) + 1;
    const { data } = await supabase.from('sprueche').select('text').eq('id', randomSpruchId);
    setSpruch(data[0]);
  }

  return (
    <div className="App">
      <h4>Brighter Days</h4>
      <div className='centerContainer'>
        <h1 className='PlayFair'>"{spruch.text}"</h1>
        <button className='glass-button' onClick={getRandomSpruch}>Neuer Spruch</button>  
      </div>
      <h4>Made By Jonez</h4>
    </div>
  );
}

export default App;
