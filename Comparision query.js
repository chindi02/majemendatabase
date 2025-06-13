const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);

  db.createCollection(collection);

db.UAS_MBD.find({ harga: { $gt: 80000 } });