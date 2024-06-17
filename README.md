<h1 align="center"><b>Explore Metroplex - Pengembangan Platform Informasi dan Reservasi Tempat Wisata di JABODETABEK</b></h1>

Platform ini menyediakan daftar tempat wisata di JABODETABEK dengan informasi detail, termasuk deskripsi, lokasi, dan review pengunjung. Calon wisatawan dapat melakukan booking agar pengelola dapat mengontrol jumlah pengunjung dan mencegah kelebihan pengunjung di tempat wisata. Proyek ini diharapkan dapat membantu mengatasi masalah overload wisatawan dan meningkatkan pengalaman pengunjung serta efisiensi pengelolaan tempat wisata.

## Tim C624-PS005

- R2956YB413 – [Billy Alexander](https://github.com/billyalexndr) - Universitas Pembangunan Nasional "Veteran" Jakarta
- R2116XB41 – [Nisrina Zahran](https://github.com/nisrinazahran) - Universitas Indraprasta PGRI Jakarta
- R1726YB432 – [Pieter Vardi](https://github.com/pietervardi) - Universitas Mikroskil

## Dokumen

- [Project Brief](https://docs.google.com/document/d/1INBbBdEX_H5ubBFeSVfj7LvPk6kqsM_nBKy3wgbMXcI/edit?usp=sharing)
- [Working Doc](https://docs.google.com/document/d/1K08pxiTfdBk2G4Ngr_JLCJc8aipQntynKISEmy79QHk/edit?usp=sharing)
- [User Guide]()
- [Slide Presentasi](https://docs.google.com/presentation/d/1GPpS7vy6RvJXQSDL7uMM9xaSdziKVR9A/edit?usp=sharing&ouid=101825553434143937092&rtpof=true&sd=true)
- [Video Presentasi]()
- [Video Demo Aplikasi]()

## Resources

<span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="150" alt="Logo Javascript"></span>
<a href="https://react.dev/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" width="150" alt="Logo React JS"></a>
<a href="https://vitejs.dev/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/256px-Vitejs-logo.svg.png?20220412224743" width="150" alt="Logo Vite"></a>
<a href="https://tailwindcss.com/" target="_blank"><img src="https://flowbite.s3.amazonaws.com/github/logo-github.png" width="500" height="200" alt="Logo TailwindCSS"></a>

## Instalasi / Cara menjalankan di lokal

1. Clone proyek

```bash
  git clone https://github.com/billyalexndr/explore-metroplex-frontend.git
```

2. Pindah ke branch `local-run` dengan command

```bash
  git switch local-run
```

3. Instal library menggunakan npm

```bash
  npm install
```

4. Copy + Paste .env.example lalu rename menjadi .env
5. Isikan value dari `VITE_API_BASE_URL` pada file .env dengan

```bash
  https://explore-metroplex-backend.onrender.com
```

6. Jalankan node runtime

```bash
  npm run dev
```
