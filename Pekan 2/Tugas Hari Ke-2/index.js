// soal 1

// di index.js
var readBooks = require('./callback.js')

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
    },
    {
        name: 'komik',
        timeSpent: 1000
    }
]

function rekursi(waktu, i) {
    readBooks(waktu, books[i], function (sisaWaktu) {
        if (sisaWaktu != 0) {
            i++
            if (i < books.length) {
                rekursi(sisaWaktu, i)
            } else {
                console.log("\nBuku-buku selesai dibaca")
            }
        } 
    })

}

rekursi(10000, 0)
