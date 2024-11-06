document.addEventListener("DOMContentLoaded", function() {
  // Nomor WhatsApp Anda
  const whatsappNumber = "6282346145789";

  // Fungsi untuk mengirim pesan ke WhatsApp
  function redirectToWhatsApp(fruit) {
    const message = `Halo, saya tertarik untuk membeli ${fruit}. apakah stoknya masih ada?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  // Event listener untuk setiap tombol "Buy Now"
  const buyOrangeButton = document.getElementById('buyOrange');
  if (buyOrangeButton) {
    buyOrangeButton.addEventListener('click', function() {
      redirectToWhatsApp('Madu Ukuran Jumbo');
    });
  }

  const buyGrapesButton = document.getElementById('buyGrapes');
  if (buyGrapesButton) {
    buyGrapesButton.addEventListener('click', function() {
      redirectToWhatsApp('Madu Ukuran Medium');
    });
  }

  const buyGauvaButton = document.getElementById('buyGauva');
  if (buyGauvaButton) {
    buyGauvaButton.addEventListener('click', function() {
      redirectToWhatsApp('Madu Ukuran Mini');
    });
  }

  // Set links for social media buttons
  const facebookLink = document.getElementById("facebookLink");
  if (facebookLink) {
    facebookLink.href = "https://www.facebook.com/profile.php?id=100082915128608&locale=id_ID";
  }

  const instagramLink = document.getElementById("instagramLink");
  if (instagramLink) {
    instagramLink.href = "https://www.instagram.com/maduaslinanggala/";
  }
});
