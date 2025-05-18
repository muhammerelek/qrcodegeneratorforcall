function generateQR() {
  const phone = document.getElementById('phone').value.trim();
  const data = `tel:${phone}`;
  const canvas = document.getElementById('qr-code');
  QRCode.toCanvas(canvas, data, function (error) {
    if (error) console.error(error);
    else console.log('QR kodu oluşturuldu!');
  });
}
