use('keyValueDB')  // Membuat/menggunakan database

db.users.insertMany([
  { _id: "user:1", name: "Andi", email: "andi@example.com" },
  { _id: "user:2", name: "Budi", email: "budi@example.com" },
  { _id: "user:3", name: "Citra", email: "citra@example.com" },
  { _id: "user:4", name: "Dewi", email: "dewi@example.com" },
  { _id: "user:5", name: "Eka",  email: "eka@example.com" }
])
