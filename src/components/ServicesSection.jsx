/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AOS from 'aos';
import ButtonLinkPage from './ButtonLinkPage';

export default function ServicesSection({ showButtonLink = true }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="bg-light" id="services">
      <div className="container p-3">
        <h3 className="text-center m-4" data-aos="fade-down">Jasa Layanan HAZA Baja Ringan</h3>
        <div className="row" data-aos="fade-up">
          <div className="col-md-6">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/gallery/FOTO/kontruksi-3.webp"
                alt="Service Image"
                className="card-img-top img-fluid img-style"
              />
              <div className="card-body">
                <h6 className="card-title">Reng Baja Ringan</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <LazyLoadImage
                src="assets/images/gallery/FOTO/kontruksi-14.webp"
                alt="Service Image"
                className="card-img-top img-fluid img-style"
              />
              <div className="card-body">
                <h6 className="card-title">Plafon Gypsum PVC</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4" data-aos="fade-up">
          <div className="col-md-3">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/gallery/FOTO/kontruksi-12.webp"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title">Spandex Pasiran</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/gallery/FOTO/kontruksi-17.webp"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title">Bongkar Atap lama + Pasang Baja Ringan</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/gallery/FOTO/kontruksi-20.webp"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title">Canopy Baja Ringan + Spandex pasiran</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <LazyLoadImage
                src="assets/images/gallery/FOTO/kontruksi-11.webp"
                alt="Service Image"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title">Genteng Keramik Mclass</h6>
              </div>
            </div>
          </div>
          {showButtonLink && <ButtonLinkPage />}
        </div>
      </div>
    </section>
  );
}
