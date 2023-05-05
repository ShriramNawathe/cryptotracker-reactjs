import { useEffect } from 'react';
import './styles.css';

function Popup() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const popup = document.querySelector('.popup');
      if (popup) {
        popup.style.display = 'block';
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const popup = document.querySelector('.popup');
      if (popup) {
        popup.style.display = 'none';
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    const popup = document.querySelector('.popup');
    if (popup) {
      popup.style.display = 'none';
    }
  };

  return (
    <div className="popup">
      <button className='btnX' id="close" onClick={handleClose}>&times;</button>
      <div className='info'>
        <div className='personNmae'>Shriram Rajeshwar Nawathe</div>
        <img className='img' src="https://drive.google.com/file/d/1uUv10MYNPP8lHRkvHHFhr9PDziJGtMO3/view?usp=drivesdk" alt="shriimg" />
      </div>
      <div className='Description'>
        <p>About project: CryptoTracker is the tracker you always needed. Compare different crypto currencies, look at their graphs - prices, total volumes, market cap, etc. Search from the top 150 Crypto currencies in real time and add them to your watchlist aswell.</p>
      </div>
      <button id="close" onClick={handleClose}><a href="#">Lets Go</a></button>
    </div>
  );
}

export default Popup;