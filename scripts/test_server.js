const http = require('http');

function checkRedirect(path) {
  return new Promise((resolve) => {
    const req = http.request(
      {
        hostname: 'localhost',
        port: 3005,
        path: path,
        method: 'GET',
      },
      (res) => {
        resolve({
          path,
          statusCode: res.statusCode,
          location: res.headers.location,
        });
      }
    );
    req.on('error', (err) => resolve({ path, error: err.message }));
    req.end();
  });
}

function testLeadForm() {
  return new Promise((resolve) => {
    const data = JSON.stringify({
      name: "Akash Test",
      whatsapp: "9161881100",
      businessType: "B2B & Manufacturing",
      mainGoal: "more leads",
      monthlyBudget: "₹10,000 - ₹25,000/mo",
      pagePath: "/solutions/ads-not-generating-leads"
    });

    const req = http.request(
      {
        hostname: 'localhost',
        port: 3005,
        path: '/api/leads',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            body: JSON.parse(body),
          });
        });
      }
    );
    req.on('error', (err) => resolve({ error: err.message }));
    req.write(data);
    req.end();
  });
}

async function run() {
  console.log('Testing 301 Redirects:');
  const redirectPaths = [
    '/services/website-development-kanpur',
    '/services/google-business-profile-kanpur',
    '/services/meta-google-ads-kanpur',
    '/services/brand-identity-kanpur',
    '/services/social-media-marketing-kanpur',
    '/blog/best-digital-marketing-agency-kanpur',
    '/blog/digital-marketing-cost-kanpur',
    '/blog/google-business-profile-kanpur',
    '/blog/rank-google-maps-local-seo-up',
  ];

  for (const p of redirectPaths) {
    const res = await checkRedirect(p);
    console.log(`${res.statusCode} ${res.path} -> ${res.location}`);
  }

  console.log('\nTesting /api/leads Submission:');
  const leadRes = await testLeadForm();
  console.log('Status:', leadRes.statusCode);
  console.log('Response:', leadRes.body);
}

run();
