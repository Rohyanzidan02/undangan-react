import '../styles/Header.css';
import krisImage from '../assets/kris.jpeg'; // Ensure this path is correct
import nengImage from '../assets/neng.jpeg'; // Ensure this path is correct
import BG from '../assets/bg.png'; // Ensure this path is correct

function Header() {
  return (
    <section id="home" className="home bg-image">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>Acara Pernikahan</h2>
            <h3>Diselenggarakan pada 20 Juli 2025 di Jakarta</h3>
            <p>
              Oleh karena itu, dengan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu 
              Saudara/i, untuk hadir pada acara pernikahan kami.
            </p>
          </div>

          <div className="row couple">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-8 text-end">
                  <h3>Kris Ananda Saputra</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates non labore ullam repudiandae voluptas saepe!</p>
                  <p>Putra dari Bpk. Lorem <br /> dan <br /> Ibu Ipsum</p>
                </div>
                <div className="col-4">
                  <img src={krisImage} alt="Kris Ananda Saputra" className="img-responsive rounded-circle" />
                </div>
              </div>
            </div>
            
            <span className="heart"><i className="bi bi-arrow-through-heart-fill"></i></span>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-4">
                  <img src={nengImage} alt="Neng Restiani" className="img-responsive rounded-circle" />
                </div>
                <div className="col-8">
                  <h3>Neng Restiani</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates non labore ullam repudiandae voluptas saepe!</p>
                  <p>Putra dari Bpk. Lorem <br /> dan <br /> Ibu Ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;