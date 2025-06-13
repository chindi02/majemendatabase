const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);

  db.createCollection(collection);

db[collection].find(); 
db[collection].find({ judul: "Belajar MongoDB" });