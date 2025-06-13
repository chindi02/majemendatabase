const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);

  db.createCollection(collection);

db[collection].updateOne(
  { judul: "Belajar MongoDB" },
  { $set: { stok: 12, harga: 90000 } }
);