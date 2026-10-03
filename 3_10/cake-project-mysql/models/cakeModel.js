const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function getCakesByType(type) {
  let query;
  let value;

  if (type === "new") {
    query = "SELECT * FROM products WHERE isFeatured = ?";
    value = 0;
  } else if (type === "top") {
    query = "SELECT * FROM products WHERE isFeatured = ?";
    value = 1;
  } else {
    return [];
  }

  const [rows] = await pool.query(query, [value]);

  return rows;
}

module.exports = {
  getCakesByType,
};
