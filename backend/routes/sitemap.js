const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const Job = require('../models/Job');

const BASE_URL = 'https://www.speshway.com';

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';

router.get('/sitemap.xml', async (req, res) => {
  try {
    const staticUrls = [
      { path: '/', priority: '1.0', changefreq: 'daily' },
      { path: '/about', priority: '0.9', changefreq: 'weekly' },
      { path: '/services', priority: '0.9', changefreq: 'weekly' },
      { path: '/projects', priority: '0.9', changefreq: 'weekly' },
      { path: '/team', priority: '0.8', changefreq: 'weekly' },
      { path: '/career', priority: '0.9', changefreq: 'daily' },
      { path: '/contact', priority: '0.9', changefreq: 'weekly' },
      { path: '/send-resume', priority: '0.7', changefreq: 'monthly' },
      { path: '/fraud-notice', priority: '0.8', changefreq: 'monthly' },
      { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
      { path: '/terms-of-service', priority: '0.5', changefreq: 'monthly' },
      { path: '/faq', priority: '0.8', changefreq: 'weekly' },
      { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
      { path: '/blog', priority: '0.8', changefreq: 'weekly' },
      { path: '/is-speshway-real-or-fake', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-review-2026', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-job-scam-truth', priority: '1.0', changefreq: 'daily' },
      { path: '/is-speshway-legit-company', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-hyderabad-company-review', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-career-review', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-trust-score', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-client-testimonials', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-employee-feedback', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-company-verification', priority: '1.0', changefreq: 'daily' },
    ];

    const galleryItems = await Gallery.find({ isActive: true }).select('_id updatedAt createdAt').lean();
    const jobs = await Job.find({ status: 'open' }).select('_id updatedAt createdAt').lean();

    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';
    const urlsetClose = '</urlset>';

    const urlsXml = [];

    // Add static URLs
    for (const item of staticUrls) {
      urlsXml.push(
        `<url>
          <loc>${BASE_URL}${item.path}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>${item.changefreq}</changefreq>
          <priority>${item.priority}</priority>
        </url>`
      );
    }

    // Add dynamic gallery items (blog posts)
    for (const item of galleryItems) {
      const lastmod = (item.updatedAt || item.createdAt || new Date()).toISOString().split('T')[0];
      urlsXml.push(
        `<url>
          <loc>${BASE_URL}/blog/${item._id}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>`
      );
    }

    // Add dynamic job openings
    for (const job of jobs) {
      const lastmod = (job.updatedAt || job.createdAt || new Date()).toISOString().split('T')[0];
      urlsXml.push(
        `<url>
          <loc>${BASE_URL}/career/${job._id}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`
      );
    }

    const xml = [xmlHeader, urlsetOpen, ...urlsXml, urlsetClose].join('\n');

    res.set('Content-Type', 'application/xml');
    res.send(xml);
  } catch (err) {
    res.status(500).send('Error generating sitemap');
  }
});

module.exports = router;
