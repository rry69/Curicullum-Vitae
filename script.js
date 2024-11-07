document.addEventListener("DOMContentLoaded", function() {
    console.log("Document siap, kamu bisa menambahkan efek di sini!");
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const popupMenu = document.getElementById("popup-menu");

    // Tampilkan atau sembunyikan pop-up menu ketika tombol ditekan
    menuToggle.addEventListener("click", function() {
        if (popupMenu.classList.contains('show')) {
            // Jika pop-up sudah ditampilkan, tutup dengan animasi
            popupMenu.classList.remove('show');
            popupMenu.classList.add('hide');
            setTimeout(() => {
                popupMenu.classList.remove('hide');
                popupMenu.style.display = 'none'; // Sembunyikan setelah animasi selesai
            }, 300); // Durasi animasi
        } else {
            // Jika pop-up belum ditampilkan, buka dengan animasi
            popupMenu.style.display = 'block'; // Tampilkan pop-up
            setTimeout(() => {
                popupMenu.classList.add('show');
            }, 10); // Delay singkat untuk memicu animasi
        }
    });

    
    // Sembunyikan pop-up jika pengguna mengklik di luar
    window.addEventListener("click", function(event) {
        if (!menuToggle.contains(event.target) && !popupMenu.contains(event.target)) {
            if (popupMenu.classList.contains('show')) {
                popupMenu.classList.remove('show');
                popupMenu.classList.add('hide');
                setTimeout(() => {
                    popupMenu.classList.remove('hide');
                    popupMenu.style.display = 'none'; // Sembunyikan setelah animasi selesai
                }, 300); // Durasi animasi
            }
        }
    });
});

// DateTime
function updateDateTime() {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    const now = new Date();
    
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus',
        'September', 'Oktober', 'November', 'Desember'
    ];

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    dateTimeDisplay.textContent = `${day}, ${date} ${month} ${year} - ${hours}:${minutes}:${seconds}`;
}

setInterval(updateDateTime, 1000);
updateDateTime(); 

// Toogle Color

const toggleButton = document.getElementById('colorToggle');
let currentPalette = 0;

const palettes = [
    { primary: '#f7fc73', secondary: '#c93d23', textLight: '#fff' },
    { primary: '#f6f2f1', secondary: '#2c2a2a', textLight: '#fff' },
    { primary: '#0a3461', secondary: '#81e2bc', textLight: '#fff' },
    { primary: '#f1ece7', secondary: '#29201f', textLight: '#fff' },
    { primary: '#fff1de', secondary: '#2f84b6', textLight: '#ffffff' },
    { primary: '#120c0e', secondary: '#c8cb0e', textLight: '#ffffff' },
    { primary: '#dbdec6', secondary: '#292221', textLight: '#fff' },
    { primary: '#171f6d', secondary: '#f1f2f6', textLight: '#fff' },
    { primary: '#faf9fb', secondary: '#4d1246', textLight: '#fff' },
    { primary: '#231413', secondary: '#d8d4d7', textLight: '#fff' },
    { primary: '#b1c47a', secondary: '#00000b', textLight: '#fff' },
    { primary: '#bb1417', secondary: '#faec00', textLight: '#fff' },
    { primary: '#00f4cc', secondary: '#164544', textLight: '#fff' },
    { primary: '#292d33', secondary: '#5bdada', textLight: '#fff' }
];

toggleButton.addEventListener('click', () => {
    currentPalette = (currentPalette + 1) % palettes.length;
    const palette = palettes[currentPalette];
    
    document.documentElement.style.setProperty('--primary', palette.primary);
    document.documentElement.style.setProperty('--secondary', palette.secondary);
    document.documentElement.style.setProperty('--text-light', palette.textLight);
});


// Fungsi untuk menampilkan section selanjutnya
document.addEventListener('DOMContentLoaded', function () {
    const showNextButtons = document.querySelectorAll('.show-next');
    const sections = document.querySelectorAll('.section');

    showNextButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            if (index + 1 < sections.length) {
                // Hapus kelas 'hidden' dari section berikutnya
                sections[index + 1].classList.remove('hidden');

                // Tambahkan kelas 'visible' untuk elemen <p> dan tombol di section berikutnya
                const fadeElements = sections[index + 1].querySelectorAll('.fade-in');
                fadeElements.forEach(el => el.classList.add('visible'));

                // Sembunyikan tombol "Lihat Selanjutnya" saat ini
                button.style.display = 'none';

                // Tunda tampilan tombol "Lihat Selanjutnya" di section berikutnya dengan animasi fade
                const nextButton = sections[index + 1].querySelector('.show-next');
                if (nextButton) {
                    setTimeout(() => {
                        nextButton.classList.add('visible');
                    }, 500); // Sesuaikan waktu untuk efek yang diinginkan
                }
            }
        });
    });

    // Bagian ini untuk section pertama agar elemen <p> dan tombol pertama muncul bersamaan
    const initialFadeElements = sections[0].querySelectorAll('.fade-in');
    initialFadeElements.forEach(el => el.classList.add('visible'));
});

// Ke Menu Home - Menerapkan efek Fade Out
        const portfolioButton = document.getElementById('homeButton'); // ganti ID sesuai dengan ID tombol Anda

        // Tambahkan event listener untuk menunggu klik pada tombol
        portfolioButton.addEventListener('click', (event) => {
            event.preventDefault(); // Mencegah tindakan default tombol
        
            // Tambahkan kelas 'fade-out' ke body
            document.body.classList.add('fade-out');
        
            // Tunggu selama durasi fade-out (1 detik) sebelum redirect
            setTimeout(() => {
                window.location.href = 'https://heiharry.com/cv/'; // ganti dengan URL halaman portofolio
            }, 1000); // 1000ms sesuai durasi transisi di CSS
        });


// Popup Modal Pengalaman Kerja

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    changeSlide(0); // Tampilkan slide pertama saat modal dibuka
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
};
  
// Export to Excel

// Fungsi untuk ekspor ke Excel
function exportToExcel() {
    // Mencari modal yang sedang terbuka
    const openModal = document.querySelector(".modal[style*='display: block']");

    // Jika tidak ada modal yang terbuka, hentikan fungsi
    if (!openModal) {
        alert("Tidak ada modal yang terbuka.");
        return;
    }

    // Mengambil data dari modal yang sedang terbuka
    const rows = openModal.querySelectorAll(".education-details .detail-row");

    // Menyusun data dalam format array of arrays untuk SheetJS
    const data = [["Label", "Value"]]; // Header untuk Excel

    rows.forEach(row => {
        const label = row.querySelector(".detail-label").textContent;
        const value = row.querySelector(".detail-value").textContent;
        data.push([label, value]);
    });

    // Membuat workbook baru dan menambahkan data
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Riwayat Pendidikan");

    // Menyimpan file Excel
    XLSX.writeFile(wb, "Riwayat_Pendidikan.xlsx");
};


// Gallery 2
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'https://i.ibb.co.com/0fQHzXc/image1.jpg',
        'https://i.ibb.co.com/Cth8vYt/image2.jpg',
        'https://i.ibb.co.com/QjBdNfm/image3.jpg',
        'https://i.ibb.co.com/tPnZ3M9/image4.jpg',
        'https://i.ibb.co.com/h2nzKtN/image5.jpg',
        'https://i.ibb.co.com/LrqQWDw/image6.jpg',
        'https://i.ibb.co.com/26ytxHt/image7.jpg',
        'https://i.ibb.co.com/S599yVP/image8.jpg',
        'https://i.ibb.co.com/wrHjktL/image9.jpg',
        'https://i.ibb.co.com/j8z1MQW/image10.jpg',
        'https://i.ibb.co.com/vZqFB8w/image11.jpg',
        'https://i.ibb.co.com/h1Yr9PP/image12.jpg',
        'https://i.ibb.co.com/QdW6Xct/image13.jpg',
        'https://i.ibb.co.com/y5zSc01/image14.jpg',
        'https://i.ibb.co.com/HrNBFjf/image15.jpg',
        'https://i.ibb.co.com/fxPwDR3/image16.jpg',
        'https://i.ibb.co.com/YBGLyMQ/image17.jpg',
        'https://i.ibb.co.com/XSNbmpD/image18.jpg'
    ];
    let currentIndex = 0;

    const imageElement = document.getElementById('carousel-image');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    function updateImage() {
        imageElement.classList.remove('fade-in');
        void imageElement.offsetWidth; // Trigger reflow to restart animation
        imageElement.classList.add('fade-in');
        imageElement.src = images[currentIndex];
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    });

    updateImage();
});

// Animasi bar
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar');

    bars.forEach(bar => {
        const height = parseInt(bar.style.height); // Ambil tinggi yang ditentukan
        let currentHeight = 0; // Mulai dari 0

        const interval = setInterval(() => {
            if (currentHeight < height) {
                currentHeight++; // Tingkatkan tinggi
                bar.style.height = currentHeight + '%'; // Set tinggi baru
            } else {
                clearInterval(interval); // Hentikan jika sudah mencapai tinggi akhir
                // bar.style.height = height + '%'; // Pastikan tidak ada yang diatur kembali
            }
        }, 10); // Atur kecepatan animasi (10 ms)
    });
});

// Saat halaman dimuat ulang
window.onload = function() {
    deleteAllCookies(); // Hapus semua cookie
    clearStorage(); // Hapus localStorage dan sessionStorage
};

// Fungsi untuk menghapus semua cookie
function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}

// Fungsi untuk menghapus semua data localStorage dan sessionStorage
function clearStorage() {
    localStorage.clear(); // Hapus localStorage
    sessionStorage.clear(); // Hapus sessionStorage
};

