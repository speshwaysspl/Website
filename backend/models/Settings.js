const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema(
  {
    heroTitleColor: { type: String, default: '' },
    heroSubtitleColor: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Settings', SettingsSchema);
