/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import AOS from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StickyWhatsAppIcon from '../components/StickyWhatsAppIcon';
import ContentUp from '../components/ContentUp';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <ContentUp />
      <section className="py-4 content">
        <div className="container py-md-4 p-4">
          <h3 className="heading text-center mb-3 mb-sm-5 regular-content-sub" data-aos="fade-down">
            Sekilas Tentang Kami
          </h3>
          <div className="row mt-lg-5 mt-3" data-aos="fade-up">
            <div className="col-md-5">
              <LazyLoadImage
                src="assets/images/REVISI.webp"
                alt="gambar tentang Haza Baja Ringan"
                className="img-fluid img-rounded"
              />
            </div>
            <div className="col-md-7 content-left-bottom text-left mt-3">
              <h5 className="mt-1 regular-content-sub">HAZA Baja Ringan</h5>
              <p className="mt-2 text-left">
                HAZA Baja Ringan hadir sebagai mitra anda dalam
                mewujudkan hunian yang kokoh dan elastis. Berbekal pengalaman dan tim ahli
                dibidang kontruksi, kami siap menangani beragam kebutuhan atap anda, mulai dari
                pemasangan baja ringan, bongkar pasang atap, pemasangan kanopi, hingga bongkar
                pasang plafon gypsum dan pengecoran dak
              </p>
              <p>
                Kami berkomitmen untuk memberikan layanan berkualitas tinggi dengan mengutamakan
                ketepatan, kerapian, dan kepuasan pelanggan. Dikerjakan oleh tenaga profesional
                dan berpengalaman, HAZA Baja Ringan menjamin hasil kontruksi  yang kuat,
                tahan lama, dan sesuai dengan keinginan anda.
              </p>
            </div>
          </div>
          <div className="row mt-lg-5 mt-3 py-3" data-aos="fade-up">
            <div className="col-md-7 content-left-bottom text-left mt-3">
              <h5 className="mt-1 regular-content-sub">
                HAZA Baja Ringan:  Wujudkan Atap Impian Anda
              </h5>
              <p className="mt-2 text-left">
                Di HAZA Baja Ringan, kami tidak hanya sekedar memasang atap. kami mewujudkan
                atap impian anda, baik itu desain modern minimalis, atap klasik yang elegan, atau
                kanopi unik peneduh taman. Tim ahli kami siap menerjemahkan ide dan keinginan Anda
                menjadi kenyataan. Dengan perpaduan keahlian teknis dan sentuhan artistik, kami
                hadirkan konstruksi atap yang kokoh, fungsional, dan estetis.
              </p>
              <p>
                Ingin memiliki atap rumah yang menawan? Butuh kanopi garasi yang stylish? Atau Ingin
                merenovasi atap dengan model terkini? Serahkan pada HAZA Baja Ringan! Kami
                berdedikasi untuk memberikan solusi atap terbaik yang memenuhi kebutuhan dan
                melebihi ekspetasi anda.
              </p>
            </div>
            <div className="col-md-5 mt-lg-0 mt-3">
              <LazyLoadImage
                src="assets/images/gallery/FOTO/kontruksi-3.webp"
                alt="gambar tentang salon irfan"
                className="img-fluid img-rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-md-4 p-3" data-aos="fade-up">
          <h3 className="heading text-center mb-3 mb-sm-5">Owner HAZA Baja Ringan</h3>
          <div className="row mt-lg-5 mt-4 justify-content-center">
            <div className="col text-center">
              <div className="mb-4 ">
                <LazyLoadImage
                  src="/assets/images/gallery/FOTO/pp_owner1.webp"
                  className="img-fluid rounded-owner"
                  alt="gambar pemilik salon"
                />
              </div>
              <div>
                <h4 className="mt-3">Adriyansyah</h4>
                <p>
                  Seorang
                  <i> Pemuda </i>
                  yang berbakat,
                  <i> lulusan xxxx. </i>
                  dan pengalaman bertahun tahun di industri kontruksi, Adriyansyah adalah sosok
                  pemimpin yang visioner di balik berdirinya HAZA Baja Ringan. Dedikasinya yang
                  tinggi terhadap kualitas dan kepuasan pelanggan mendorong HAZA untuk selalu
                  mengutamakan ketepatan, kerapian, dan ketahanan dalam setiap proyek yang
                  dikerjakan. Kemampuannya dalam menerjemahkan kebutuhan klien menjadi desain
                  atap yang fungsional dan estetis membuatnya menjadi mitra yang tepat dalam
                  mewujudkan hunian impian anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StickyWhatsAppIcon />
    </div>
  );
}
