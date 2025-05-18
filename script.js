function generateQR() {
  const countryCode = document.getElementById('country-code').value;
  const phoneNumber = document.getElementById('phone').value.trim();

  // Geçerli mi kontrolü (sadece rakam girilmiş mi)
  if (!/^\d+$/.test(phoneNumber)) {
    alert("Lütfen sadece rakamlardan oluşan geçerli bir telefon numarası girin.");
    return;
  }

  const fullNumber = `tel:${countryCode}${phoneNumber}`;
  const canvas = document.getElementById('qr-code');

  QRCode.toCanvas(canvas, fullNumber, {
    width: 256,
    margin: 2
  }, function (error) {
    if (error) console.error(error);
    else console.log('QR kodu oluşturuldu!');
  });
}

function printQR() {
  window.print();
}
