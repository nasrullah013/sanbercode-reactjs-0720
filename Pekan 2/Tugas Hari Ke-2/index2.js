// soal 2

var readBooksPromise = require('./promise.js')

var books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    }
]


function rekursi(waktu, i) {
    readBooksPromise(waktu, books[i]).then(function (sisaWaktu) {
            if (sisaWaktu > 0) {
                i++
                if (i < books.length) {
                    rekursi(sisaWaktu, i)
                } else {
                    console.log("\nBuku-buku selesai dibaca, Sisa Waktu " + sisaWaktu )
                }
            }
        })
        .catch(function (selesai) {
            console.log(selesai)
        })




}

rekursi(10000, 0)