function generateQR() {
  const phone = document.getElementById('phone').value.trim();
  const data = `tel:${phone}`;
  const canvas = document.getElementById('qr-code');
  QRCode.toCanvas(canvas, data, {
    width: 256, // varsayılan 256 px (A4 için ideal)
    margin: 2
  }, function (error) {
    if (error) console.error(error);
    else console.log('QR kodu oluşturuldu!');
  });
}

function printQR() {
  window.print();
}
