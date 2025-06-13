const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);

  db.createCollection(collection);

db.UAS_MBD.insertMany([
  { judul: "MongoDB untuk Pemula", penulis: "Budi", tahun: 2022, kategori: "Basis Data", stok: 5, harga: 75000 },
  { judul: "Mastering MongoDB", penulis: "Citra", tahun: 2024, kategori: "Basis Data", stok: 7, harga: 95000 },
  { judul: "Dasar Pemrograman", penulis: "Dewi", tahun: 2021, kategori: "Pemrograman", stok: 8, harga: 65000 },
  { judul: "Data Science MongoDB", penulis: "Eko", tahun: 2024, kategori: "Data Science", stok: 3, harga: 105000 }
]);