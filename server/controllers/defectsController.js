const defectsService = require("../services/defectsService");

const getAllDefects = async (re, res, next) => {
  try {
    res.json({ data: await defectsService.getAllDefects() });
  } catch (error) {
    console.log(`Error in getAllDefects: ${error.message}`);
    next(error);
  }
};

module.exports = {
  getAllDefects,
};
