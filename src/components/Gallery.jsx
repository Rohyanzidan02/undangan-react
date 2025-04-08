import '../styles/Gallery.css';
import dalam1 from '../assets/gallery/1.jpeg';
import gallery1 from '../assets/gallery/thumbnail/1.jpeg';
import dalam2 from '../assets/gallery/2.jpeg';
import gallery2 from '../assets/gallery/thumbnail/2.jpeg';
import dalam3 from '../assets/gallery/3.jpeg';
import gallery3 from '../assets/gallery/thumbnail/3.jpeg';
import dalam4 from '../assets/gallery/4.jpeg';
import gallery4 from '../assets/gallery/thumbnail/4.jpeg';

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 text-center">
            <span>Memory kisah kami</span>
            <h2>Galerry foto</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates alias nisi unde voluptatibus hic eum?</p>
          </div>
        </div>
      </div>

      {/* row col menentukan banyak foto tampil */}
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-3 justify-content-center">
        <div className="col mt-3">
          <a href={dalam1} data-toggle="lightbox" data-caption="This describes the image" data-gallery="mygalery">
            <img src={gallery1} alt="satudua" className="img-fluid w-100 rounded" />
          </a>
        </div>
        <div className="col mt-3">
          <a href={dalam2} data-toggle="lightbox" data-caption="This describes the image2" data-gallery="mygalery">
            <img src={gallery2} alt="satudua" className="img-fluid w-100 rounded" />
          </a>
        </div>
        <div className="col mt-3">
          <a href={dalam3} data-toggle="lightbox" data-caption="This describes the image3" data-gallery="mygalery">
            <img src={gallery3} alt="satudua" className="img-fluid w-100 rounded" />
          </a>
        </div>
        <div className="col mt-3">
          <a href={dalam4} data-toggle="lightbox" data-caption="This describes the image4" data-gallery="mygalery">
            <img src={gallery4} alt="satudua" className="img-fluid w-100 rounded" />
          </a>
        </div>
        
        <div className="col mt-3">
          <a href={dalam1} data-toggle="lightbox" data-caption="This describes the image5" data-gallery="mygalery">
            <img src={gallery1} alt="satudua" className="img-fluid w-100 rounded" />
          </a>
        </div>

        <div className="col mt-3">
          <a href={dalam4} data-toggle="lightbox" data-caption="This describes the image6" data-gallery="mygalery">
            <img src={gallery4} alt="satudua" className="img-fluid w-100 rounded" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;