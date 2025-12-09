const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema(
  {
    heroTitle: { type: String, default: '' },
    heroTitleColor: { type: String, default: '' },
    heroSubtitle: { type: String, default: '' },
    heroSubtitleColor: { type: String, default: '' },
    welcomeBadgeColor: { type: String, default: '' },
    welcomeBadgeEffect: { type: String, default: 'pulse' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Settings', SettingsSchema);
