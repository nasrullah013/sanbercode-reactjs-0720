// soal 1

    function halo() {

        return "Halo Sanbers!"
    }

    console.log(halo())


// soal 2

    function kalikan(a, b) {
        return a * b
    }

    var num1 = 12
    var num2 = 4

    var hasilKali = kalikan(num1, num2)

    console.log(hasilKali)


// soal 3

    function introduce(nm, ag, ad, hb) {
        console.log("Nama saya " + nm + ", umur saya " + ag + " tahun, alamat saya di " + (ad[0].toLowerCase() + ad.slice(1)) + ", dan saya punya hobby yaitu " + hb + "!")

    }

    var name = "John"
    var age = 30
    var address = "Jalan belum jadi"
    var hobby = "Gaming"

    var perkenalan = introduce(name, age, address, hobby)