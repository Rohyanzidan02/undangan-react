import '../styles/Story.css';
import gambar1 from '../assets/1.jpg';
import gambar2 from '../assets/2.jpg';
import gambar3 from '../assets/3.jpg';

function Story() {
  return (
    <section id="story" className="story">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 text-center">
            <span>Kisah Pengantin</span>
            <h2>Cerita Kami</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates alias nisi unde voluptatibus hic eum?</p>
          </div>
        </div>
    
        <div className="row">
          <div className="col">
            <ul className="timeline">
              <li>
                <div className="timeline-image" style={{ backgroundImage: `url(${gambar1})` }}></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3>Pertama Bertemu</h3>
                    <span>1 Juli 2002</span>
                  </div>
                  <div className="timeline-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa provident natus accusamus? Nesciunt, tempora.</p>
                  </div>
                </div>
              </li>
    
              <li className="timeline-inverted">
                <div className="timeline-image" style={{ backgroundImage: `url(${gambar2})` }}></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3>Mulai Serius</h3>
                    <span>1 Jan 2002</span>
                  </div>
                  <div className="timeline-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, porro excepturi numquam doloremque nobis quo consequatur repudiandae qui!</p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="timeline-image" style={{ backgroundImage: `url(${gambar3})` }}></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3>Mulai Serius</h3>
                    <span>1 Jan 2002</span>
                  </div>
                  <div className="timeline-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, porro excepturi numquam doloremque nobis quo consequatur repudiandae qui!</p>
                  </div>
                </div>
              </li>
    
              <li className="timeline-inverted">
                <div className="timeline-image" style={{ backgroundImage: `url(${gambar2})` }}></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3>Mulai Serius</h3>
                    <span>1 Jan 2002</span>
                  </div>
                  <div className="timeline-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, porro excepturi numquam doloremque nobis quo consequatur repudiandae qui!</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;