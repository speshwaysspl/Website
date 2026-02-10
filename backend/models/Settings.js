const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema(
  {
    heroTitle: { type: String, default: '' },
    heroTitleColor: { type: String, default: '' },
    heroSubtitle: { type: String, default: '' },
    heroSubtitleColor: { type: String, default: '' },
    welcomeBadgeText: { type: String, default: 'Welcome to the Future of IT' },
    welcomeBadgeColor: { type: String, default: '' },
    welcomeBadgeEffect: { type: String, default: 'pulse' },
    showHeroSection: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Settings', SettingsSchema);
