const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const Job = require('../models/Job');

const BASE_URL = 'https://www.speshway.com';

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';

router.get('/sitemap.xml', async (req, res) => {
  try {
    const staticUrls = [
      '/',
      '/about',
      '/services',
      '/projects',
      '/blog',
      '/team',
      '/career',
      '/contact',
      '/faq',
    ];

    const galleryItems = await Gallery.find({ isActive: true }).select('_id updatedAt createdAt').lean();
    const jobs = await Job.find({ status: 'open' }).select('_id updatedAt createdAt').lean();

    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';

    const urlsXml = [];

    for (const path of staticUrls) {
      urlsXml.push(
        `<url><loc>${BASE_URL}${path}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
      );
    }

    for (const item of galleryItems) {
      const lastmod = (item.updatedAt || item.createdAt || new Date()).toISOString();
      urlsXml.push(
        `<url><loc>${BASE_URL}/blog/${item._id}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`
      );
    }

    for (const job of jobs) {
      const lastmod = (job.updatedAt || job.createdAt || new Date()).toISOString();
      urlsXml.push(
        `<url><loc>${BASE_URL}/career/${job._id}</loc><lastmod>${lastmod}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`
      );
    }

    const xml = [xmlHeader, urlsetOpen, ...urlsXml, urlsetClose].join('');

    res.set('Content-Type', 'application/xml');
    res.send(xml);
  } catch (err) {
    res.status(500).send('Error generating sitemap');
  }
});

module.exports = router;
