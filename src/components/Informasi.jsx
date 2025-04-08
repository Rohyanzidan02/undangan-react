import '../styles/Informasi.css'

function Informasi() {
  return (
    <section id="info" className="info">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-10 text-center">
        <h2>Informasi Acara</h2>
        <p className="alamat">Alamat: Gedung Jakarta, Utara <br /> jl Baru Utara, Jakarta
          kec. Cilincing</p>
        <a href="https://maps.app.goo.gl/S8fCBDGjChWNFHBq9" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm my-4">
          Klik Untuk Membuka Peta
        </a>
        <p className="description">Diharapkan untuk tidak salah alamat dan tanggal. Manakala
          tiba di tujuan namun tidak ada tanda-tanda sedang dilangsungkan pernikahan, boleh jadi 
          anda salah jadwal atau salah tempat.</p>
      </div>
    </div>

    <div className="row justify-content-center mt-4">
      <div className="col-md-5 col-10">
        <div className="card text-center text-bg-light mb-5">
          <div className="card-header">
            Akad Nikah
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <i className="bi bi-clock-history d-block"></i>
                <span>08.00 - 10.00</span>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <i className="bi bi-calendar-week d-block"></i>
                <span>Minggu, 20 Juli 2025</span> {/* Updated date to match the wedding date */}
              </div>
            </div>
          </div>
          <div className="card-footer">
            Saat acara akad diharapkan untuk kondusif menjaga kehikmatan dan kehusyuan seluruh prosesi.
          </div>
        </div>
      </div>

      <div className="col-md-5 col-10">
        <div className="card text-center text-bg-light">
          <div className="card-header">
            Resepsi
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <i className="bi bi-clock-history d-block"></i>
                <span>11.00 - Selesai</span>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <i className="bi bi-calendar-week d-block"></i>
                <span>Minggu, 20 Juli 2025</span> {/* Updated date to match the wedding date */}
              </div>
            </div>
          </div>
          <div className="card-footer">
            Saat acara resepsi diharapkan untuk kondusif menjaga kehikmatan dan kehusyuan seluruh prosesi.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Informasi