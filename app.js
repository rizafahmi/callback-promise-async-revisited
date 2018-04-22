const { getProfile, getRepos, countTotalStars } = require("./helpers");

const handleCountStars = (err, stars) => {
  if (err) console.error(err);
  console.log(`Total stars: ${stars}`);
};
const handleRepos = (err, repos) => {
  if (err) console.error(err);
  countTotalStars(JSON.parse(repos), handleCountStars);
};
const handleProfile = (err, profile) => {
  if (err) console.error(err);
  getRepos(JSON.parse(profile).items[0].login, handleRepos);
};

getProfile("rizafahmi", handleProfile);
