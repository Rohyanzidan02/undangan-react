import '../styles/Footer.css';

function CustomFooter() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col text-center">
            <small className="footer-block">&copy; Muhammad Rohyan Zidan 2025. All Rights Reserved.</small>
            <small className="footer-block">
              Design by <a href="https://instagram.com/sandhikagalih">@rohyanvanbjir</a>.
            </small>

            <ul className="footer-icons">
              <li><a href="#"><i className="bi bi-instagram"></i></a></li>
              <li><a href="#"><i className="bi bi-youtube"></i></a></li>
              <li><a href="#"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#"><i className="bi bi-tiktok"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;