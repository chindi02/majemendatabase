use('wideColumnDB')

db.purchases.insertMany([
  {
    _id: "cust_001",
    name: "Andi",
    items: {
      "2023": ["Beras", "Gula"],
      "2024": ["Minyak", "Susu"],
      "2025": ["Tepung"]
    }
  },
  {
    _id: "cust_002",
    name: "Budi",
    items: {
      "2024": ["Sabun", "Shampo"]
    }
  },
  {
    _id: "cust_003",
    name: "Citra",
    items: {
      "2023": ["Telur"],
      "2025": ["Garam", "Gula"]
    }
  },
  {
    _id: "cust_004",
    name: "Dewi",
    items: {
      "2024": ["Kopi", "Teh", "Susu"]
    }
  },
  {
    _id: "cust_005",
    name: "Eka",
    items: {
      "2023": ["Sikat Gigi"],
      "2024": ["Pasta Gigi", "Mouthwash"],
      "2025": ["Sabun"]
    }
  }
])
