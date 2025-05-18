function generateQR() {
  const countryCode = document.getElementById('country-code').value;
  let phoneNumber = document.getElementById('phone').value;

  // Tüm boşlukları temizle
  phoneNumber = phoneNumber.replace(/\s+/g, '');

  // Sadece rakamlardan oluşmalı
  if (!/^\d+$/.test(phoneNumber)) {
    alert("Lütfen geçerli bir telefon numarası giriniz (sadece rakam).");
    return;
  }

  // Uzunluk kontrolü
  if (phoneNumber.length !== 10) {
    alert("Telefon numarası 10 haneli olmalıdır.");
    return;
  }

  const fullNumber = `tel:${countryCode}${phoneNumber}`;
  const canvas = document.getElementById('qr-code');

  QRCode.toCanvas(canvas, fullNumber, {
    width: 300, // Daha büyük QR kod
    margin: 2
  }, function (error) {
    if (error) console.error(error);
    else console.log('QR kodu oluşturuldu:', fullNumber);
  });
}

function printQR() {
  window.print(); // Yazdırma penceresini açar
}
