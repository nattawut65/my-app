import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function isPrimeNumber(num) {
  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function App() {
  const [num, setNum] = useState(0);
  const [isPrime, setIsPrime] = useState(false);

  useEffect(() => {
    setIsPrime(isPrimeNumber(num));
  }, [num]);

  return (
    <div className="App">
      <Header />
      <div className="MyContent">
        <h2>{num}</h2>
        <p>{isPrime ? 'เป็นจำนวนเฉพาะ' : 'ไม่เป็นจำนวนเฉพาะ'}</p>
        <button onClick={() => setNum(num + 1)}>เพิ่ม</button>
        <button onClick={() => setNum(num - 1)}>ลด</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;