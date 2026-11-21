const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.resolve(__dirname, '..', '.next', 'server', 'app', 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('index.html not found! Run npm run build first.');
  process.exit(1);
}

const html = fs.readFileSync(indexHtmlPath, 'utf8');

const tests = [
  { name: 'H1 Heading', check: html.includes("Getting Traffic but Not Enough Leads?") },
  { name: 'Pricing ₹4,999', check: html.includes("₹4,999") },
  { name: 'Pricing ₹9,999', check: html.includes("₹9,999") },
  { name: 'Pricing ₹18,999', check: html.includes("₹18,999") },
  { name: 'CountUp SSR (50+)', check: html.includes("50") },
  { name: 'Problems Grid', check: html.includes("ads-not-generating-leads") },
  { name: 'Use Cases Grid', check: html.includes("clinics-doctors") },
  { name: 'FAQ Question 1', check: html.includes("Why should I choose Nexudyam") },
  { name: 'FAQ Direct Answer', check: html.includes("Nexudyam specializes in fixing the disconnect") },
  { name: 'Organization JSON-LD', check: html.includes("Redside Technologies India") },
  { name: 'WhatsApp CTA', check: html.includes("919161881100") },
];

console.log('=== SSR HTML Verification Results ===');
let allPassed = true;
tests.forEach(({ name, check }) => {
  console.log(`${check ? 'PASS' : 'FAIL'}: ${name}`);
  if (!check) allPassed = false;
});

if (allPassed) {
  console.log('ALL SSR TESTS PASSED! Raw server HTML contains full content before hydration.');
} else {
  console.error('Some SSR checks failed!');
  process.exit(1);
}
