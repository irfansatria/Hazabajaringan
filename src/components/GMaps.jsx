import React from 'react';

function GoogleMapEmbed() {
  const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6663075433726!2d106.8245840250373!3d-6.175408343812018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1729135759385!5m2!1sid!2sid';

  return (
    <div className="mt-4 map-responsive">
      <iframe
        title="lokasi HAZA"
        width="600"
        height="450"
        style={{ border: 0 }}
        src={mapSrc}
        allowFullScreen
      />
    </div>
  );
}

export default GoogleMapEmbed;
