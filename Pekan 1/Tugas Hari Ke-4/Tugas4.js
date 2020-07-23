// soal 1

    var angka = 0

    while (angka <= 20) {
        if (angka == 0) {
            console.log("LOOPING PERTAMA")
        }else {
            console.log(angka + " - " + "I love coding")
        }

        angka += 2
    }

    while (angka >= 2) {
        if (angka == 22) {
            console.log("LOOPING KEDUA")
        }else {
            console.log(angka + " - " + "I will become a frontend developer")
        }

        angka -= 2
    }


    // soal 2

    for (angka = 1; angka <= 20; angka++) {
        if (angka % 3 == 0 && angka % 2 == 1) {
            console.log(angka + " - " + "I Love Coding")
        }else if (angka % 2 == 1) {
            console.log(angka + " - " + "Santai")
        }else {
            console.log(angka + " - " + "Berkualitas")
        }
    }


    // soal 3
    
    var angka
    var angkaUp

    for (angka = 1; angka <= 7; angka++) {

        var tagar = []

        for (angkaUp = 1; angkaUp <= angka; angkaUp++) {
            tagar.push("#")
            
        }
        console.log(tagar.join(""))

    }


// soal 4
    var kalimat="saya sangat senang belajar javascript"

    var kalimatUp = kalimat.split(" ")

    console.log(kalimatUp)


// soal 5
    var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"]

    var daftarBuahUp = daftarBuah.sort()

    var i = 0
    while (i < daftarBuahUp.length) {
        console.log(daftarBuahUp[i])

        i++
    }