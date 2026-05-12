const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const Job = require('../models/Job');

const BASE_URL = 'https://speshway.com';

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
      { path: '/blog', priority: '0.8', changefreq: 'weekly' },
      { path: '/faq', priority: '0.8', changefreq: 'weekly' },
      { path: '/send-resume', priority: '0.7', changefreq: 'monthly' },
      { path: '/fraud-notice', priority: '0.8', changefreq: 'monthly' },
      { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
      { path: '/terms-of-service', priority: '0.5', changefreq: 'monthly' },
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
      { path: '/top-10-ways-to-identify-fake-job-offers-india', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-vs-fake-recruiters-full-guide', priority: '1.0', changefreq: 'daily' },
      { path: '/why-people-search-speshway-scam-explained', priority: '1.0', changefreq: 'daily' },
      { path: '/how-scammers-misuse-company-names', priority: '1.0', changefreq: 'daily' },
      { path: '/fake-recruitment-warning', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-internship-program-reviews-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-pvt-ltd-registration-details', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-official-contact-and-address', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-technology-stack-and-services', priority: '1.0', changefreq: 'daily' },
      { path: '/life-at-speshway-solutions-work-culture-reviews', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-leadership-team-and-vision', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-client-success-stories-and-reviews', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-data-security-and-privacy-policy', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-hyderabad-office-location-tour', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-company-awards-and-recognition', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-technology-stack-and-services', priority: '1.0', changefreq: 'daily' },
      { path: '/life-at-speshway-solutions-work-culture-reviews', priority: '1.0', changefreq: 'daily' },
      { path: '/speshway-solutions-leadership-team-and-vision', priority: '1.0', changefreq: 'daily' },
      
      // Dynamic Keyword Landing Pages
      { path: '/payroll-management-software-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/app-development-company-in-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/website-development-company-in-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/software-development-company-in-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/mobile-app-developers-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/web-development-services-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/best-it-company-in-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/hyderabad-software-solutions', priority: '1.0', changefreq: 'daily' },
      { path: '/custom-software-development-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/hyderabad-web-designers', priority: '1.0', changefreq: 'daily' },
      { path: '/hyderabad-app-developers', priority: '1.0', changefreq: 'daily' },
      { path: '/seo-keywords', priority: '0.8', changefreq: 'weekly' },
      { path: '/top-ranking-it-services-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/best-software-solutions-t-hub', priority: '0.9', changefreq: 'daily' },
      { path: '/speshway-solutions-seo-optimization', priority: '0.9', changefreq: 'daily' },
      { path: '/high-visibility-it-company-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/android-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/ios-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/flutter-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/react-native-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/mobile-app-design-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/hybrid-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/native-app-developers-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/enterprise-mobile-apps-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/startup-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/ecommerce-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/taxi-booking-app-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/food-delivery-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/car-service-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/on-demand-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/saas-app-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/website-design-company-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/responsive-website-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/ecommerce-website-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/corporate-website-design-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/business-website-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/seo-website-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/mern-stack-developers-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/react-js-developers-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/node-js-developers-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/full-stack-developers-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/dynamic-website-development-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/custom-web-applications-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/landing-page-design-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/portfolio-website-developers-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/professional-web-designers-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/hrms-software-development-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/crm-software-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/erp-development-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/attendance-management-system-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/face-recognition-attendance-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/automation-software-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/business-management-software-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/admin-dashboard-development-hyderabad', priority: '1.0', changefreq: 'daily' },
      { path: '/custom-business-applications-hyderabad', priority: '1.0', changefreq: 'daily' },
      
      // Area-based and Google Business Keywords
      { path: '/app-developers-in-hitech-city', priority: '0.9', changefreq: 'daily' },
      { path: '/website-company-in-madhapur', priority: '0.9', changefreq: 'daily' },
      { path: '/software-company-in-gachibowli', priority: '0.9', changefreq: 'daily' },
      { path: '/it-company-near-kukatpally', priority: '0.9', changefreq: 'daily' },
      { path: '/web-designers-in-jubilee-hills', priority: '0.9', changefreq: 'daily' },
      { path: '/mobile-app-developers-in-kondapur', priority: '0.9', changefreq: 'daily' },
      { path: '/software-services-in-banjara-hills', priority: '0.9', changefreq: 'daily' },
      { path: '/website-development-in-ameerpet', priority: '0.9', changefreq: 'daily' },
      { path: '/it-solutions-in-begumpet', priority: '0.9', changefreq: 'daily' },
      { path: '/web-development-near-financial-district-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/hyderabad-it-services', priority: '0.9', changefreq: 'daily' },
      { path: '/software-company-near-me', priority: '0.9', changefreq: 'daily' },
      { path: '/web-design-company-near-me', priority: '0.9', changefreq: 'daily' },
      { path: '/mobile-app-development-near-me', priority: '0.9', changefreq: 'daily' },
      { path: '/website-designers-hyderabad-telangana', priority: '0.9', changefreq: 'daily' },
      { path: '/best-developers-in-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/it-startup-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/business-website-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/digital-services-hyderabad', priority: '0.9', changefreq: 'daily' },
      { path: '/online-software-solutions-hyderabad', priority: '0.9', changefreq: 'daily' },
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
