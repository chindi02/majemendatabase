const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);


  db.createCollection(collection);

  db[collection].insertOne({
  judul: "Belajar MongoDB",
  penulis: "Andi Wijaya",
  tahun: 2023,
  kategori: "Basis Data",
  stok: 10,
  harga: 85000
});