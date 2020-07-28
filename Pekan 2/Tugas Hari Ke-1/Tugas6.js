// soal 1

    var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]

    var arrayDaftarPeserta = {
        nama: arrayDaftarPeserta[0],
        "jenis kelamin": arrayDaftarPeserta[1],
        hobi: arrayDaftarPeserta[2],
        "tahun lahir": arrayDaftarPeserta[3]
    }


    console.log(arrayDaftarPeserta)
    console.log(arrayDaftarPeserta.nama)
    console.log("==============================")


// soal 2

    var buah = [{
            nama: "strawberry",
            warna: "merah",
            "ada bijinya": "tidak",
            harga: 9000
        },
        {
            nama: "jeruk",
            warna: "oranye",
            "ada bijinya": "ada",
            harga: 8000
        },
        {
            nama: "Semangka",
            warna: "Hijau & Merah",
            "ada bijinya": "ada",
            harga: 10000
        },
        {
            nama: "Pisang",
            warna: "kuning",
            "ada bijinya": "tidak",
            harga: 5000
        }
    ]

    console.log("Berdasarkan Index Array Pertama")
    console.log(buah[0])


    console.log("\nBerdasarkan Property Pertama")
    buah.forEach(function (item) {
        console.log("Nama Buah : " + item.nama)
    })
    console.log("============================== BATAS NO.")


// Soal 3

    function inputFilm(tdf) {
        return dataFilm.push(tdf)
    }

    var dataFilm = []

    var tambahDataFilm = {
        nama: "Dani Nasrullah",
        durasi: "1:52:58",
        genre: "Fantasy",
        tahun: 2018
    }

    inputFilm(tambahDataFilm)

    console.log(dataFilm)
    console.log("============================== BATAS NO.")


// soal 4
// relese 0

    class Animal {
        constructor(name) {
            this.name = name
            this.legs = 4
            this.cold_blooded = false
        }

        get aname() {
            return this.name
        }

        get alegs() {
            return this.legs
        }

        get acold() {
            return this.cold_blooded
        }

    }

    sheep = new Animal("shaun")

    console.log(sheep.aname)
    console.log(sheep.alegs)
    console.log(sheep.acold)

    // release 1

    class Ape extends Animal {
        constructor(name) {
            super(name);
            this.legs = 2;
        }
        yell() {
            return " Auooo "
        }
    }

    class Frog extends Animal {
        constructor(name) {
            super(name);
        }
        jump() {
            return " hop hop "
        }
    }

    console.log("Object Dari Kelas Abe")
    var sungokong = new Ape("kera sakti")
    console.log(sungokong)
    console.log(sungokong.yell())

    console.log("Object Dari Kelas Frog")
    var kodok = new Frog("buduk")
    console.log(kodok)
    console.log(kodok.jump())
    console.log("============================== BATAS NO.")


// soal 5

    class Clock {
        constructor({
            template
        }) {

            var timer;

            function render() {
                var date = new Date();

                var hours = date.getHours();
                if (hours < 10) hours = '0' + hours;

                var mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;

                var secs = date.getSeconds();
                if (secs < 10) secs = '0' + secs;

                var output = template
                    .replace('h', hours)
                    .replace('m', mins)
                    .replace('s', secs);

                console.log(output);
            }

            this.stop = function () {
                clearInterval(timer);
            };

            this.start = function () {
                render();
                timer = setInterval(render, 1000);
            };
        }
    }


    var clock = new Clock({
        template: 'h:m:s'
    });
    clock.start();