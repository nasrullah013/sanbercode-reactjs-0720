// soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kataKeduaUp = kataKedua.replace("s", "S");
var kataKeempatUp = kataKeempat.toUpperCase();

var simpulanKata = kataPertama.concat(" ", kataKeduaUp, " ", kataKetiga, " ", kataKeempatUp);

console.log(simpulanKata);

// soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var satu = parseInt(kataPertama);
var dua = parseInt(kataKedua);
var tiga = parseInt(kataKetiga);
var empat = parseInt(kataKeempat);

var jumlah = satu + dua + tiga + empat;

console.log("Jumlah Keseluruhan Nilai : " + jumlah);

// soal 3

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

// soal 4

var nilai = 67;
var indeks;

if (nilai >= 80 && nilai <= 100) {
    indeks = "A";
} else if (nilai >= 70 && nilai < 80) {
    indeks = "B";
} else if (nilai >= 60 && nilai < 70) {
    indeks = "C";
} else if (nilai >= 50 && nilai < 60) {
    indeks = "D";
} else if (nilai >= 0 && nilai < 50) {
    indeks = "E";
} else {
    indeks = "Di Luar Jangkauan";
}

console.log("Nilai = " + nilai + " === Indeks Angka = " + indeks);

//  soal 5

var tanggal = 7;
var bulan = 2;
var tahun = 1998;

var bulanUp;

switch (bulan) {
    case 1: {
        bulanUp = "Januari";
        break;
    }
    case 2: {
        bulanUp = "Februari";
        break;
    }
    case 3: {
        bulanUp = "Maret";
        break;
    }
    case 4: {
        bulanUp = "April";
        break;
    }
    case 5: {
        bulanUp = "Mei";
        break;
    }
    case 6: {
        bulanUp = "Juni";
        break;
    }
    case 7: {
        bulanUp = "Juli";
        break;
    }
    case 8: {
        bulanUp = "Agustus";
        break;
    }
    case 9: {
        bulanUp = "September";
        break;
    }
    case 10: {
        bulanUp = "Oktober";
        break;
    }
    case 11: {
        bulanUp = "November";
        break;
    }
    case 12: {
        bulanUp = "Desember";
        break;
    }
    default: {
        bulanUp = "</>"
    }
}

console.log("Anda Lahir Tanggal : " + tanggal + " " + bulanUp + " " + tahun);