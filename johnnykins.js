/*
  Johnny kins
  Cause mosts johnnys cant
  but this johnny cannn!!!
  - Johnny Kins
  - aka John1234brown
*/
var storedConfig = null;


// Function to fetch the JSON file
async function fetchJSONFile(path) {
  if (storedConfig === null) {
    const response = await fetch(path);
    storedConfig = response.json();
    return storedConfig;
  } else {
    return storedConfig;
  }
}

async function fetchTXTFile(path) {
  const response = await fetch(path);
  console.log('response', response);
  return response.text();
}

async function updateBandName() {
  const bandName = await fetchTXTFile('ourBandName.txt');
  const bandNameElement = document.getElementById('navbar-band-name');
  const bandNameElement2 = document.getElementById('bandName');
  const titleElement3 = document.getElementById('title');
  bandNameElement.textContent = bandName;
  bandNameElement2.textContent = bandName;
  titleElement3.textContent = bandName;
}
updateBandName();

async function updateBandDescription() {
  const bandDescription = await fetchTXTFile('ourBandDescription.txt');
  const bandNameElement2 = document.getElementById('bandDescription');
  bandNameElement2.textContent = bandDescription;
}
updateBandDescription();
// Function to populate the contact links
async function populateContactLinks() {
  const config = await fetchJSONFile('config.json');
  const emailLink = document.getElementById('contactEmail');
  const phoneLink = document.getElementById('contactPhone');
  if (config.contactEmail) {
    console.log(config.contactEmail);
    console.log(`'mailto:' ${config.contactEmail}`)
    emailLink.href = 'mailto:' + config.contactEmail;
  }

  if (config.contactPhone) {
    phoneLink.href = 'tel:' + config.contactPhone;
  }
}

// Function to populate the social links list
async function populateSocialLinks() {
  const config = await fetchJSONFile('config.json');
  const socialLinksList = document.getElementById('additionalSocialList');
  //console.log("Test");
  //console.log('Test :', config.additionalSocialLinks);
  ///console.log("Test 2:", config.additionalSocialLinksList);
  if (config.additionalSocialLinks && config.additionalSocialLinksList) {
    config.additionalSocialLinksList.forEach(item => {
      //console.log(item);
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = item.text;
      link.classList.add('btn', 'btn-outline-primary', 'm-2');
      socialLinksList.appendChild(link);
      //console.log(socialLinksList);
    });
  }
}

// Function to populate the regular social links
async function populateRegularSocialLinks() {
  const config = await fetchJSONFile('config.json');
  const facebookLink = document.getElementById('facebook');
  const instagramLink = document.getElementById('instagram');
  const twitterLink = document.getElementById('twitter');
  const googleLink = document.getElementById('google');
  const youtubeLink = document.getElementById('youtube');

  if (config.facebook) {
    facebookLink.href = config.facebook;
  }

  if (config.instagram) {
    instagramLink.href = config.instagram;
  }

  if (config.xtwitter) {
    twitterLink.href = config.xtwitter;
  }

  if (config.google) {
    googleLink.href = config.google;
  }

  if (config.youtube) {
    youtubeLink.href = config.youtube;
  }
}

//Populate Cover Pictures!
async function updateCoverCarousel() {
  const config = await fetchJSONFile('config.json');
  console.log("config:", config);
  const coverCarousel = document.getElementById('coverCarousel');
  coverCarousel.innerHTML = ''; // Clear existing carousel items

  config.coversPicturesPaths.forEach((path, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active');
    }

    const img = document.createElement('img');
    img.src = path;
    img.classList.add('d-block', 'w-100');
    img.alt = '...';

    carouselItem.appendChild(img);
    coverCarousel.appendChild(carouselItem);
  });
}

//Populate Youtube Videos!
async function updateVideoCarousel() {
  const config = await fetchJSONFile('config.json');
  const videoCarousel = document.getElementById('videoCarousel');
  videoCarousel.innerHTML = ''; // Clear existing carousel items

  config.ourYoutubeVideoEmbeds.forEach((url, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active');
    }

    const videoContainer = document.createElement('div');
    videoContainer.classList.add('embed-responsive', 'embed-responsive-16by9');

    const videoIframe = document.createElement('iframe');
    videoIframe.classList.add('embed-responsive-item');
    videoIframe.src = url;
    videoIframe.allowfullscreen = true;

    videoContainer.appendChild(videoIframe);
    carouselItem.appendChild(videoContainer);
    videoCarousel.appendChild(carouselItem);
  });
}

async function updateSponsors() {
  const config = await fetchJSONFile('config.json');
  const sponsorSection = document.getElementById('sponsors');
  const navbarSponsorSection = document.getElementById('navbar-sponsors')
  const sponsorList = document.getElementById('sponsorList');

  if (!config.ourSponsors) {
    sponsorSection.style.display = 'none';
    navbarSponsorSection.style.display = 'none';
    return; // Exit function early if sponsors should not be displayed
  }

  // Reset display style if sponsors should be displayed
  sponsorSection.style.display = '';
  navbarSponsorSection.style.display = '';

  sponsorList.innerHTML = ''; // Clear existing sponsor logos

  config.ourSponsorsLogoPaths.forEach((path) => {
    const sponsorCol = document.createElement('div');
    sponsorCol.classList.add('col-md-3', 'col-6');

    const sponsorImg = document.createElement('img');
    sponsorImg.classList.add('center-block', 'img-fluid', 'd-block');
    sponsorImg.src = path;

    sponsorCol.appendChild(sponsorImg);
    sponsorList.appendChild(sponsorCol);
  });
}

async function updatePricing() {
  const config = await fetchJSONFile('config.json');
  const pricingDescription = await fetchTXTFile('ourPricingDescription.txt');
  const hoursElement = document.getElementById('hours');
  const priceElement = document.getElementById('price');
  const descriptionElement = document.getElementById('priceDescription');
  console.log(pricingDescription);
  hoursElement.innerHTML = "<strong>" + config.ourPricingHours + "</strong>";
  priceElement.innerHTML = "<strong>" + config.ourPricingPrice + "</strong>";
  descriptionElement.innerHTML = "<strong>" + pricingDescription + "</strong>";
}



async function updateBandMembers() {
  const config = await fetchJSONFile('config.json');
  const bandMembers = document.getElementById('bandMembers');
  bandMembers.innerHTML = ''; // Clear existing band members

  for (let i = 0; i < config.ourBandMembersPhotoPaths.length; i++) {
    const memberCol = document.createElement('div');
    memberCol.classList.add('col-lg-4', 'col-md-6');

    const memberLink = document.createElement('a');
    memberLink.href = config.ourBandMembersLinks[i];

    const memberImg = document.createElement('img');
    memberImg.src = config.ourBandMembersPhotoPaths[i];
    memberImg.classList.add('center-block', 'img-fluid', 'my-3', 'shadowed');
    memberImg.width = 300;

    const memberName = document.createElement('h3');
    memberName.classList.add('mb-0');
    memberName.innerHTML = `<b>${config.ourBandMembersNames[i]}</b>`;

    const memberRole = document.createElement('p');
    memberRole.classList.add('text-muted');
    memberRole.textContent = config.ourBandMembersRoles[i];

    memberLink.appendChild(memberImg);
    memberLink.appendChild(memberName);
    memberLink.appendChild(memberRole);
    memberCol.appendChild(memberLink);
    bandMembers.appendChild(memberCol);
  }
}

// Call the function to populate the social links list
async function Main() {
  //updateBandName(); //Moved outside of this function to increase load time of the Band Name when users visit the page!

  //Update the Cover Picture Carousel!
  await updateCoverCarousel();

  //Update Youtube Video Carousel!
  updateVideoCarousel();

  updateBandMembers();

  //Update Pricing!
  updatePricing();

  //Update Sponsors!
  updateSponsors();

  //This will populate the regular social icon links such as facebook instagram etc..
  populateRegularSocialLinks();
  //This will populate additional social links
  populateSocialLinks();
  // This will populate your contact links!
  populateContactLinks();
}
Main();