# Tagihan Harian

Aplikasi pencatatan kunjungan toko dalam satu file HTML. Tidak memerlukan proses build; GitHub Pages dapat menyajikan `index.html` langsung dari root repository.

## Publikasikan dengan GitHub Pages

1. Buat repository baru di GitHub. Pilih **Public** jika ingin memakai GitHub Pages pada paket GitHub Free.
2. Unggah `index.html`, `.nojekyll`, dan `README.md` ke root repository. Jangan unggah file rekap `.csv` karena bisa berisi data kunjungan.
3. Buka **Settings > Pages** pada repository.
4. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu tekan **Save**.
5. Tunggu proses publikasi selesai. GitHub akan menampilkan alamat situs di halaman Pages, biasanya `https://NAMA-AKUN.github.io/NAMA-REPOSITORY/`.

## Buka di HP

Buka alamat GitHub Pages tersebut di browser HP. Untuk akses lebih cepat, pilih menu browser **Tambahkan ke layar utama**. Izinkan akses lokasi saat browser memintanya ketika tombol GPS digunakan.

## Penyimpanan dan privasi

Catatan dan foto disimpan di `localStorage` browser pada perangkat yang sedang digunakan. Data tidak otomatis tersinkron ke perangkat lain. Gunakan fitur impor/ekspor CSV untuk memindahkan catatan; foto tidak disertakan dalam CSV. Untuk menjaga privasi, jangan unggah CSV atau data pelanggan ke repository publik.

Tailwind CSS dan font dimuat melalui CDN sehingga browser memerlukan koneksi internet untuk memuat tampilan tersebut.