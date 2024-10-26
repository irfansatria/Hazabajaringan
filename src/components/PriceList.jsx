/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';

export default function PriceList() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [hairTreatments] = useState([
    { no: '1', name: 'CNP 0,75 Truss + Reng 040', price: 'Rp170.000' },
    { no: '2', name: 'CNP 0,75 TASO + Reng 040', price: 'Rp190.000' },
    { no: '3', name: 'CNP 1 mm Truss + Reng 040', price: 'Rp205.000' },
    { no: '4', name: 'CNP 1 mm TASO + Reng 040', price: 'Rp250.000' },
    { no: '5', name: 'Genteng Metal Pasir/m2', price: 'Rp90.000' },
    { no: '6', name: 'Alumunium Foil single/m2', price: 'Rp20.000' },
    { no: '7', name: 'Alumunium Foil double/m2', price: 'Rp30.000' },
    { no: '8', name: 'Karpus/Nok', price: 'Rp250.000' },
    { no: '9', name: 'Listplank 20cm/30cm', price: 'Rp100.000/Rp105.000' },
    { no: '10', name: 'Talang Zincalume 60cm/90cm', price: 'Rp105.000/Rp110.000' },
    { no: '11', name: 'Bongkar atap lama', price: 'Rp35.000' },
    { no: '12', name: 'Nok/Karpus Genteng Keramik', price: 'RP250.000' },
    { no: '13', name: 'Pasang Banbanan', price: 'Rp180.000' },
    { no: '14', name: 'Naik Bata/m2', price: 'Rp450.000' },
    { no: '15', name: 'Jasa Pasang Genteng Berat', price: 'Rp35.000' },
    { no: '16', name: 'Ngecor Dak', price: 'Rp1.200.000' },
    { no: '17', name: 'JNgecor reng balok', price: 'Rp380.000' },
  ]);

  const [otherTreatments] = useState([
    { no: '1', name: 'Pasang Rangka hollow Galvanish + Gypsum 9mm', price: 'Rp165.000' },
    { no: '2', name: '', price: '' },
    { no: '3', name: '', price: '' },
    { no: '4', name: 'Pasang Rangka Hollow + Plafon GRC 4mm', price: 'Rp175.000' },
    { no: '5', name: 'Pemasangan Drop Plafon', price: 'Rp90.000' },
    { no: '6', name: 'Bongkar plafon lama', price: 'Rp25.000' },
    { no: '7', name: 'Pasang rangka hollow + plafon PVC berikut list', price: 'Rp250.000' },
  ]);

  const [other] = useState([
    { no: '1', name: 'Bongkar atap Lama + Pasang Baja Ringan 0,75 mm + Jasa Pasang Genteng Lama', price: 'Rp230.000' },
    { no: '2', name: 'Bongkar atap Lama + Pasang Baja Ringan 0,75 mm + Pasang Genteng Metal Pasiran', price: 'Rp250.000' },
    { no: '3', name: 'Bongkar Atap Lama + Pasang Baja Ringan 0,75 mm + Pasang Spandex Pasiran', price: '250.000' },
    { no: '4', name: 'Bongkar Atap Lama + Pasang Baja Ringan 0,75 mm + Spandex Pasiran', price: 'Rp280.000' },
    { no: '5', name: 'Bongkar Atap Lama + Pasang Baja Ringan 1 mm + Pasang Genteng Lama', price: 'Rp250.000' },
    { no: '6', name: 'Bongkar Atap Lama + Pasang Baja Ringan 0,75 mm + Pasang Genteng Keramik Mclass/kan muri + nok', price: 'RP450.000' },
    { no: '7', name: 'Bongkar atap Lama + Pasang Baja Ringan 0,75 mm + Alderon', price: 'Rp450.000' },
  ]);

  const [otherss] = useState([
    { no: '1', name: 'Pasang Canopi Baja Ringan 0,75 + Genteng Metal Pasiran', price: 'Rp250.000' },
    { no: '2', name: 'Pasang Canopi Baja Ringan 0,75 + spandex Polos', price: 'Rp250.000' },
    { no: '3', name: 'Pasang Canopi Baja Ringan 0,75 + Alderon', price: 'Rp450.000' },
    { no: '4', name: 'Pasang Canopi Baja Ringan 0,75 + Spandex Pasiran', price: 'Rp285.000' },
  ]);

  const [lainlain] = useState([
    { no: '1', name: 'Bongkar + Pasang Plafon Gypsum APLUS + Rangka Hollow Galvanish berikut list dan cat', price: 'Rp165.000' },
    { no: '2', name: 'Bongkar + Pasang Plafon Gypsum J.Board + Rangka Hollow Galvanish berikut list dan cat', price: 'Rp195.000' },
  ]);

  return (
    <section className="pricing">
      <div className="container p-3">
        <h3 className="text-center regular-font-table m-4" data-aos="fade-down">Daftar Harga</h3>
        <div className="table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered table-rounded">
            <thead>
              <tr className="table-dark">
                <td colSpan="3" className="text-center regular-font-table">
                  <strong>PERTUKANGAN</strong>
                </td>
              </tr>
              <tr className="text-center regular-font-table">
                <th scope="col">No.</th>
                <th scope="col">Untuk Pemasangan</th>
                <th scope="col">Harga/m2 Terpasang</th>
              </tr>
            </thead>
            <tbody>
              {hairTreatments.map((item, index) => (
                <tr key={index} className="text-center regular-font-table-sub">
                  <td>{item.no}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered table-rounded">
            <thead>
              <tr className="table-dark">
                <td colSpan="3" className="text-center regular-font-table">
                  <strong>PLAFON</strong>
                </td>
              </tr>
              <tr className="text-center regular-font-table">
                <th scope="col">No.</th>
                <th scope="col">Untuk Pemasangan Plafon</th>
                <th scope="col">Harga/m2</th>
              </tr>
            </thead>
            <tbody>
              {otherTreatments.map((item, index) => (
                <tr key={index} className="text-center regular-font-table-sub">
                  <td>{item.no}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered table-rounded">
            <thead>
              <tr className="table-dark">
                <td colSpan="3" className="text-center regular-font-table">
                  <strong>DAFTAR HARGA PAKET PEMASANGAN</strong>
                </td>
              </tr>
              <tr className="text-center regular-font-table">
                <th scope="col">No.</th>
                <th scope="col">Uraian</th>
                <th scope="col">Harga/m2</th>
              </tr>
            </thead>
            <tbody>
              {other.map((item, index) => (
                <tr key={index} className="text-center regular-font-table-sub">
                  <td>{item.no}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered table-rounded">
            <thead>
              <tr className="table-dark">
                <td colSpan="3" className="text-center regular-font-table">
                  <strong>DAFTAR HARGA PEMASANGAN KANOPI</strong>
                </td>
              </tr>
              <tr className="text-center regular-font-table">
                <th scope="col">No.</th>
                <th scope="col">Uraian</th>
                <th scope="col">Harga/m2</th>
              </tr>
            </thead>
            <tbody>
              {otherss.map((item, index) => (
                <tr key={index} className="text-center regular-font-table-sub">
                  <td>{item.no}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 table-responsive" data-aos="fade-up">
          <table className="table mx-auto table-bordered table-rounded">
            <thead>
              <tr className="table-dark">
                <td colSpan="3" className="text-center regular-font-table">
                  <strong>Lain-Lain</strong>
                </td>
              </tr>
              <tr className="text-center regular-font-table">
                <th scope="col">No.</th>
                <th scope="col">Uraian</th>
                <th scope="col">Harga/m2</th>
              </tr>
            </thead>
            <tbody>
              {lainlain.map((item, index) => (
                <tr key={index} className="text-center regular-font-table-sub">
                  <td>{item.no}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
