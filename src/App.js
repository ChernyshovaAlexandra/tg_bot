import { useEffect } from 'react';
import './assets/styles/main.scss';
import Performance from './screens/Performance'

function App() {
  useEffect(() => {
    window.Telegram.WebApp.expand()
  }, [])
  return (
    <div className='w-full audience'>

      <Performance />
    </div>
  );
}

export default App;
