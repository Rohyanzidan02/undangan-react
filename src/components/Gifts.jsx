import '../styles/Gifts.css'; // Adjust the path as necessary for your styles
import sw from '../assets/saweria.png';
import BCA from '../assets/bca.png';
import OCBC from '../assets/ocbc.png';
import { Fade } from 'react-awesome-reveal';

const Gifts = () => {
  return (
    <section id="gifts" className="gifts">
      <div className="container">
      <Fade direction='up' delay={300} triggerOnce={true} cascade={true}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 text-center">
            <span>Ungkapan Tanda Kasih</span>
            <h2>Kirim Hadiah</h2>
            <p>Isi form di bawah ini untuk melakukan konfirmasi kehadiran</p>
          </div>
        </div>

        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="bank-logos">
                  
                  <img src={BCA} alt="BCA" className="bank-logo" />
                  <img src={OCBC} alt="OCBC" className="bank-logo" />
                </div>
              </li>
              <li className="list-group-item">
                <div className="fw-bold">Qris</div>
                <img src={sw} alt="QR Code" className="img-qr" width="150" />
              </li>
            </ul>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  );
};

export default Gifts;