const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema(
  {
    heroTitleColor: { type: String, default: '' },
    heroSubtitleColor: { type: String, default: '' },
    welcomeBadgeColor: { type: String, default: '' },
    welcomeBadgeEffect: { type: String, default: 'pulse' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Settings', SettingsSchema);
