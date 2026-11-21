const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
process.env.CHROME_PATH = chromePath;

const reportPath = path.resolve(__dirname, '..', 'lighthouse-report.json');

console.log('Running Lighthouse audit against http://localhost:3005 ...');
try {
  execSync(
    `npx lighthouse http://localhost:3005 --chrome-flags="--headless --no-sandbox" --output=json --output-path="${reportPath}" --quiet`,
    {
      env: { ...process.env, CHROME_PATH: chromePath },
      stdio: 'inherit',
      timeout: 120000,
    }
  );

  if (fs.existsSync(reportPath)) {
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    const categories = report.categories;
    const audits = report.audits;

    console.log('\n=== LIGHTHOUSE AUDIT REPORT ===');
    console.log(`Performance Score: ${Math.round(categories.performance.score * 100)}/100`);
    console.log(`Accessibility Score: ${Math.round(categories.accessibility.score * 100)}/100`);
    console.log(`Best Practices Score: ${Math.round(categories['best-practices'].score * 100)}/100`);
    console.log(`SEO Score: ${Math.round(categories.seo.score * 100)}/100`);

    console.log('\n=== CORE WEB VITALS ===');
    console.log(`Largest Contentful Paint (LCP): ${audits['largest-contentful-paint']?.displayValue || audits['largest-contentful-paint']?.numericValue + 'ms'}`);
    console.log(`Cumulative Layout Shift (CLS): ${audits['cumulative-layout-shift']?.displayValue || audits['cumulative-layout-shift']?.numericValue}`);
    console.log(`Total Blocking Time (TBT / INP proxy): ${audits['total-blocking-time']?.displayValue || audits['total-blocking-time']?.numericValue + 'ms'}`);
    console.log(`First Contentful Paint (FCP): ${audits['first-contentful-paint']?.displayValue}`);
    console.log(`Speed Index: ${audits['speed-index']?.displayValue}`);
  }
} catch (err) {
  console.error('Lighthouse execution error:', err.message);
}
