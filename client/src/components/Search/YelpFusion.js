'use strict';
 
const yelp = require('yelp-fusion');

const apiKey = "kaEuLEuoM9btZBxPihNV_dFtSF1ueSXwuP8T76UHvO0pMpRFMRzwl087Nxb9RLFgr0uoM-wptFNSfxYnMbaSv6rztHxqacbjEWFFmHCug9QWA4sjoHjnPuMVNfxYXHYx";
 
const client = yelp.client(apiKey);
 
// basic search format
client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});

// business search format 
client.business('gary-danko-san-francisco').then(response => {
  console.log(response.jsonBody.name);
}).catch(e => {
  console.log(e);
});

// reviews search format 
client.reviews('gary-danko-san-francisco').then(response => {
  console.log(response.jsonBody.reviews[0].text);
}).catch(e => {
  console.log(e);
});

// autocomplete format 
client.autocomplete({
  text:'pizza'
}).then(response => {
  console.log(response.jsonBody.terms[0].text);
}).catch(e => {
  console.log(e);
}); 

// business match search format 
// matchType can be 'lookup' or 'best'
client.businessMatch('lookup', {
  name: 'Pannikin Coffee & Tea',
  address1: '510 N Coast Hwy 101',
  address2: 'Encinitas, CA 92024',
  city: 'Encinitas',
  state: 'CA',
  country: 'US'
}).then(response => {
  console.log(response.jsonBody.businesses[0].id);
}).catch(e => {
  console.log(e);
});

// event search format 
client.eventSearch({
  categories:2,
  is_free:true,
  location: 'claremont, ca'
}).then(response => {
  console.log(response.jsonBody.events[0].name);
}).catch(e => {
  console.log(e);
});