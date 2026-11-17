"use strict";
const nama = document.getElementById('pekerja');
const jamkerja = document.getElementById('jamKerja');
const upah = document.getElementById('upahJam');
const button = document.getElementById('btnSimpan');
const Hasil = document.getElementById('hasil');
let daftarPekerja = [];
let daftarJam = [];
let daftarUpahJam = [];
let daftarUpah = [];
function hitungUpah(jamkerja, upah) {
    return jamkerja * upah;
}
function hitungTotalUpah() {
    let total = 0;
    for (let i = 0; i < daftarUpah.length; i++) {
        total += daftarUpah[i];
    }
    return total;
}
function resetInput() {
    nama.value = '';
    jamkerja.value = '';
    upah.value = '';
}
function tampilkanData() {
    Hasil.innerHTML = '';
    for (let i = 0; i < daftarPekerja.length; i++) {
        Hasil.innerHTML += `Nama Pekerja: ${daftarPekerja[i]}<br>`;
        Hasil.innerHTML += `Jam Kerja: ${daftarJam[i]}<br>`;
        Hasil.innerHTML += `Upah per Jam: ${daftarUpahJam[i]}<br>`;
        Hasil.innerHTML += `Total Upah: ${daftarUpah[i]}<br>`;
        Hasil.innerHTML += `<br>`;
    }
    const totalPengeluaran = hitungTotalUpah();
    Hasil.innerHTML += `Total Pengeluaran Upah: ${totalPengeluaran}`;
}
function simpanData() {
    const Nama = nama.value;
    const jam = Number(jamkerja.value);
    const Upah = Number(upah.value);
    daftarPekerja.push(Nama);
    daftarJam.push(jam);
    daftarUpahJam.push(Upah);
    const indeks = daftarPekerja.length - 1;
    const upahPekerja = hitungUpah(daftarJam[indeks], daftarUpahJam[indeks]);
    daftarUpah.push(upahPekerja);
    tampilkanData();
    resetInput();
}
button.addEventListener('click', simpanData);
