const Settings = require('../models/Settings');

const getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne({});
    if (!settings) {
      settings = await Settings.create({});
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSettings = async (req, res) => {
  try {
    const updates = {};
    if (typeof req.body.heroTitleColor !== 'undefined') updates.heroTitleColor = req.body.heroTitleColor;
    if (typeof req.body.heroSubtitleColor !== 'undefined') updates.heroSubtitleColor = req.body.heroSubtitleColor;

    const settings = await Settings.findOneAndUpdate({}, updates, { new: true, upsert: true });
    res.json(settings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getSettings, updateSettings };
