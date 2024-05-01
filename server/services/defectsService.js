const sql = require("mssql");
const config = require("../config/config");
const getAllDefects = async () => {
  try {
    return sql.connect(config, (err) => {
      if (err) console.log(err);

      console.log("Database connected");
      // create a new request object
      const request = new sql.Request();

      // query to the database and get the data
      return request.query("SELECT * FROM DefectLog", (err, result) => {
        if (err) console.log(err);
        console.log("Result from DB");
        console.log(result);
        // send data as response
        return result;
      });
    });

    // return [
    //   { DateTime: "18-04-2024  08:00:32", type: "Dent mark", severity: 8 },
    //   { DateTime: "18-04-2024  08:01:32", type: "RollerMark", severity: 3 },
    // ];
  } catch (error) {
    console.log(`Error in getAllDefects Service: ${error.message}`);
    next(error);
  }
};

module.exports = {
  getAllDefects,
};
