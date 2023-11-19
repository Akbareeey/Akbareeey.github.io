document.getElementById('contactBtn').addEventListener('click', function() {
    // Tambahkan logika untuk menentukan platform preferensi pengguna
    var isMobile =  /* Logika untuk menentukan apakah pengguna menggunakan perangkat mobile atau desktop */;

    if (isMobile) {
        // Jika pengguna menggunakan perangkat mobile, arahkan ke WhatsApp
        window.location.href ='https://api.whatsapp.com/send?phone=6282113180652';
    } else {
        // Jika pengguna menggunakan desktop, arahkan ke Instagram
        window.location.href = 'https://www.instagram.com/barzsukaworkout/';
    }
});
