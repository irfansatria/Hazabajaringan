/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import { GoMoveToTop } from 'react-icons/go';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-light footer-container" id="footer">
      <div className="layer py-4">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="top-content">HAZA Baja Ringan</h2>
              <p className="my-3">
                Kami di HAZA Baja Ringan percaya bahwa setiap bangunan memiliki karakter dan
                kebutuhan yang unik. Oleh karena itu, kami menawarkan solusi atap yang disesuaikan
                dengan kebutuhan setiap klien, baik dari segi desain, fungsi, maupun anggaran.
              </p>
              <p>
                Lebih dari sekadar membangun atap, kami berkomitmen untuk menciptakan struktur Atap
                yang kokoh, aman, dan selaras dengan gaya bangunan anda. Dengan demikian, anda tidak
                hanya mendapatkan atap yang tahan lama, tetapi juga meningkatkan nilai estetika dan
                kenyamanan hunian anda.
              </p>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-4">
              <div>
                <h3 className="mb-3 top-content">Jam Operasional</h3>
                <hr className="bg-light" />
                <ul className="list-unstyled">
                  <li>
                    <p>Senin - Jumat 07.30 - 21.00 WIB</p>
                  </li>
                  <li className="my-2">
                    <p>Sabtu - Minggu 08.30 - 21.00 WIB</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-4">
              <div>
                <h3 className="mb-3 top-content">Hubungi Kami</h3>
                <hr className="bg-light" />
                <div>
                  <p>
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                      className="text-light"
                      aria-label="Email"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      xxxx@gmail.com
                    </a>
                  </p>
                </div>
                <div className="my-2">
                  <p>0857-7800-0156</p>
                </div>
                <div>
                  <p>
                    Jl.Raya cileungsi - Jonggol, Cipeucang, Kec. Cileungsi,
                    Kab. Bogor Jawa Barat 16820
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center my-sm-4 my-4">&#169; 2024 Haza baja Ringan || Katzee.</p>
          <div className="text-center mt-4">
            <ul className="list-unstyled social-icons">
              <li>
                <a
                  href="https://web.facebook.com/HBR.Hasbibajaringan/"
                  className="text-light"
                  aria-label="Sosial Media Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} />
                </a>
              </li>
              <li>
                <a
                  href="http://www.youtube.com/@adriansyahadriansyah8601"
                  className="text-light"
                  aria-label="Sosial Media TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/adriansyah_vlog/"
                  className="text-light"
                  aria-label="Sosial Media Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} />
                </a>
              </li>
            </ul>
          </div>
          <div className="move-top text-right">
            <a
              href="#content-up"
              className="move-top"
              aria-label="link top content"
            >
              <GoMoveToTop />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
