const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);

//Buat collection jika belum ada

  db.createCollection(collection);
