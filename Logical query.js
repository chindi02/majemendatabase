const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);

  db.createCollection(collection);

db[collection].find({
  $or: [
    { kategori: "Basis Data" },
    { harga: { $lt: 80000 } }
  ]
});