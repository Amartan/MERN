const pool = require("../config/mysql.config");

exports.getEmployees = async (limit) => {
  try {
    if (limit) {
      const [rows] = await pool.query(
        `SELECT emp_no FROM employees limit ${limit}`
      );
      return rows;
    }
  } catch (err) {
    console.log(err);
  }
};
