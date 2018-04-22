const { getProfile, getRepos, countTotalStars } = require("./helpers");

getProfile("rizafahmi")
  .then(profile => getRepos(profile.data.items[0].login))
  .then(repos => countTotalStars(repos.data))
  .then(stars => console.log(`Total stars: ${stars}`))
  .catch(err => console.error(err));
