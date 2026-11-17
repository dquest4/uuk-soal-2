const nama = document.getElementById('pekerja') as HTMLInputElement;
const jamkerja = document.getElementById('jamKerja') as HTMLInputElement;
const upah = document.getElementById('upahJam') as HTMLInputElement;
const button = document.getElementById('btnSimpan') as HTMLButtonElement;
const Hasil = document.getElementById('hasil') as HTMLElement;

let daftarPekerja : string[] = [];
let daftarJam : number[] = [];
let daftarUpahJam : number[] = [];
let daftarUpah : number[] = [];

function hitungUpah(jamkerja: number, upah: number): number{return jamkerja * upah;
}

function hitungTotalUpah(): number {
    let total = 0;
    for (let i = 0; i < daftarUpah.length; i++) {
        total += daftarUpah[i];
    }
    return total;
}

function resetInput(): void {
    nama.value = '';
    jamkerja.value = '';
    upah.value = '';
}

function tampilkanData(): void {
    Hasil.innerHTML = '';

    for(let i = 0; i < daftarPekerja.length; i++){
        Hasil.innerHTML += `Nama Pekerja: ${daftarPekerja[i]}<br>`;
        Hasil.innerHTML += `Jam Kerja: ${daftarJam[i]}<br>`;
        Hasil.innerHTML += `Upah per Jam: ${daftarUpahJam[i]}<br>`;
        Hasil.innerHTML += `Total Upah: ${daftarUpah[i]}<br>`;
        
        Hasil.innerHTML += `<br>`; 
    }
    const totalPengeluaran = hitungTotalUpah();
    Hasil.innerHTML += `Total Pengeluaran Upah: ${totalPengeluaran}`;
}

function simpanData(): void {
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