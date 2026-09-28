# Tagihan Harian

Aplikasi pencatatan kunjungan toko dalam satu file HTML. Tidak memerlukan proses build; GitHub Pages dapat menyajikan `index.html` langsung dari root repository.

## Publikasikan dengan GitHub Pages

1. Buat repository baru di GitHub. Pilih **Public** jika ingin memakai GitHub Pages pada paket GitHub Free.
2. Unggah `index.html`, `.nojekyll`, dan `README.md` ke root repository. Jangan unggah file rekap `.csv` karena bisa berisi data kunjungan.
3. Buka **Settings > Pages** pada repository.
4. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu tekan **Save**.
5. Tunggu proses publikasi selesai. GitHub akan menampilkan alamat situs di halaman Pages, biasanya `https://NAMA-AKUN.github.io/NAMA-REPOSITORY/`.

## Pasang di HP

Buka alamat GitHub Pages di browser HP "https://teddy318e.github.io/tagihan-harian/". Di Android, ketuk **Pasang aplikasi** di halaman atau pilih **Instal aplikasi** dari menu Chrome. Di iPhone, buka dengan Safari, ketuk **Bagikan**, lalu **Tambahkan ke Layar Utama**. Setelah aplikasi dibuka pertama kali dengan internet, halaman dan aset tampilan yang sudah termuat dapat digunakan offline; GPS, pencarian alamat, dan pemuatan aset CDN terbaru memerlukan internet.

## Penyimpanan dan privasi

Catatan dan foto disimpan di `localStorage` browser pada perangkat yang sedang digunakan. Data tidak otomatis tersinkron ke perangkat lain. Gunakan fitur impor/ekspor CSV untuk memindahkan catatan; foto tidak disertakan dalam CSV. Untuk menjaga privasi, jangan unggah CSV atau data pelanggan ke repository publik.

Tailwind CSS dan font dimuat melalui CDN sehingga browser memerlukan koneksi internet untuk memuat tampilan tersebut.
