// soal 1

console.log("\n----SOAL 1----")

let jari = 7
const phi = 3.14

const luasLingkaran = (r) => phi * Math.pow(r, 2) 

const kelilingLingkaran = (r) => 2 * phi * r

console.log("Luas Lingkaran : " + luasLingkaran(jari))
console.log("Keliling Lingkaran : " + kelilingLingkaran(jari))


// soal 2

console.log("\n----SOAL 2----")

const tambahkalimat = (satu, dua, tiga, empat, lima) =>
            `${satu} ${dua} ${tiga} ${empat} ${lima}`

let kalimat = ""

let pertama = "Saya"
let kedua = "adalah"
let ketiga = "seorang"
let keempat = "frontend"
let kelima = "developer"


kalimat = tambahkalimat(pertama, kedua, ketiga, keempat, kelima)
console.log(kalimat)


// soal 3

console.log("\n----SOAL 3----")

class Book {
    constructor(name){
        this.name = name
        this.totalPage = 2345
        this.price = "Rp.508.350,-"
    }
}

class Komik extends Book {
    constructor(name){
        super(name)
        this.totalPage = 90
        this.price = "Rp.65.150,-"
        this.Colorful = false
    }
}

var buku = new Book("Kalkulus")
console.log(buku)

var comik = new Komik("One Piece")
console.log(comik)