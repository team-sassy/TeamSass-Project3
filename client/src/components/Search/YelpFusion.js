'use strict';
 
const yelp = require('yelp-fusion');

const apiKey = "kaEuLEuoM9btZBxPihNV_dFtSF1ueSXwuP8T76UHvO0pMpRFMRzwl087Nxb9RLFgr0uoM-wptFNSfxYnMbaSv6rztHxqacbjEWFFmHCug9QWA4sjoHjnPuMVNfxYXHYx";
 
const client = yelp.client(apiKey);
 
// basic search
client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});

