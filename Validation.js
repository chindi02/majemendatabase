const database = 'DatabasesChindi';
const collection = 'UAS_MBD';

use(database);

  db.createCollection(collection);

db.createCollection("BukuSchema", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["judul", "penulis", "tahun", "kategori", "stok", "harga"],
      properties: {
        judul: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi"
        },
        penulis: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi"
        },
        tahun: {
          bsonType: "int",
          minimum: 2000,
          maximum: 2100,
          description: "harus berupa integer antara 2000-2100"
        },
        kategori: {
          bsonType: "string",
          description: "harus berupa string dan wajib diisi"
        },
        stok: {
          bsonType: "int",
          minimum: 0,
          description: "harus integer dan tidak boleh negatif"
        },
        harga: {
          bsonType: "int",
          minimum: 1000,
          description: "harus berupa angka dan lebih dari 1000"
        }
      }
    }
  }
});