const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);

  db.createCollection(collection);

db[collection].bulkWrite([
  {
    insertOne: {
      document: { judul: "MongoDB Advanced", penulis: "Fajar", tahun: 2025, kategori: "Basis Data", stok: 4, harga: 99000 }
    }
  },
  {
    updateOne: {
      filter: { judul: "Mastering MongoDB" },
      update: { $set: { stok: 10 } }
    }
  },
  {
    deleteOne: {
      filter: { judul: "Dasar Pemrograman" }
    }
  }
]);