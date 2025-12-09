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
    if (typeof req.body.heroTitle !== 'undefined') updates.heroTitle = req.body.heroTitle;
    if (typeof req.body.heroTitleColor !== 'undefined') updates.heroTitleColor = req.body.heroTitleColor;
    if (typeof req.body.heroSubtitle !== 'undefined') updates.heroSubtitle = req.body.heroSubtitle;
    if (typeof req.body.heroSubtitleColor !== 'undefined') updates.heroSubtitleColor = req.body.heroSubtitleColor;
    if (typeof req.body.welcomeBadgeColor !== 'undefined') updates.welcomeBadgeColor = req.body.welcomeBadgeColor;
    if (typeof req.body.welcomeBadgeEffect !== 'undefined') updates.welcomeBadgeEffect = req.body.welcomeBadgeEffect;

    const settings = await Settings.findOneAndUpdate({}, updates, { new: true, upsert: true });
    res.json(settings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getSettings, updateSettings };
