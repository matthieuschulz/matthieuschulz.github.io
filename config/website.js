const meta = {
  // Metadata
  siteTitle: 'Matthieu Schulz - Computer Science Student @UCL |Software Engineer',
  siteDescription:
    'Matthieu Schulz - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Matthieu Schulz',
  siteShortName: 'Matthieu Schulz',
  siteUrl: 'https://matthieuschulz.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@matthieuschulz',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'anuraghazra',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
