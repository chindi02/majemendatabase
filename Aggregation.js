const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);

  db.createCollection(collection);

db.UAS_MBD.aggregate([
  {
    $group: {
      _id: "$kategori",
      totalStok: { $sum: "$stok" }
    }
  }
]);