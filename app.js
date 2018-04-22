const { getProfile, getRepos, countTotalStars } = require("./helpers");

getProfile("rizafahmi", (err, profile) => {
  if (err) console.error(err);
  getRepos(JSON.parse(profile).items[0].login, (err, repos) => {
    if (err) console.error(err);
    countTotalStars(JSON.parse(repos), (err, stars) => {
      if (err) console.error(err);
      console.log(`Total stars: ${stars}`);
    });
  });
});
