import React, { useEffect, useState } from 'react';
import '../styles/Rsvp.css';

import { Fade } from 'react-awesome-reveal';

const Rsvp = () => {
  const [status, setStatus] = useState(''); // State to manage the selected status

  useEffect(() => {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Konfirmasi Kehadiran Berhasil Terkirim!");
      });
    });

    // Disqus configuration
    window.disqus_config = function () {
      this.page.url = window.location.href;  // Current page URL
      this.page.identifier = 'unique-identifier'; // Unique identifier for the article
    };

    const d = document, s = d.createElement('script');
    s.src = 'https://kris-neng.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }, []);

  return (
    <section id="rsvp" className="rsvp">
      <div className="container">
      <Fade direction='up' delay={300} triggerOnce={true} cascade={true}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 text-center">
            <h2>Konfirmasi Kehadiran</h2>
            <p>Isi form di bawah ini untuk melakukan konfirmasi kehadiran dan berikan ucapan </p>
          </div>
        </div>

        <form 
          className="row row-cols-md-auto g-3 align-items-center justify-content-center"
          method="POST" 
          action="https://script.google.com/macros/s/AKfycbzpEzV9LduPm06Gd0Z0dY_KDCMGPsndiCbeYY0jXF2u7mhUn2rKlRAXp9wNdTxcYW-2/exec" 
          id="my-form"
        >
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Nama</label>
              <input type="text" className="form-control" id="nama" name="nama" />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="jumlah" className="form-label">Jumlah</label>
              <input 
                type="number" 
                className="form-control" 
                id="jumlah" 
                name="jumlah" 
                min="1" 
                max="100" 
                defaultValue="1" 
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="status" className="form-label">Konfirmasi Kehadiran</label>
              <select 
                name="status" 
                id="status" 
                className="form-select" 
                value={status} 
                onChange={(e) => setStatus(e.target.value)} 
              >
                <option value="">Pilih salah satu</option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
          </div>
          <div className="col-12" style={{ marginTop: '35px' }}>
            <button className="btn btn-primary">Kirim</button>
          </div>
        </form>
        {/* discouse */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div id="disqus_thread"></div>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript"></a></noscript>
          </div>
        </div>

              </Fade>
      </div>
    </section>
  );
};

export default Rsvp;