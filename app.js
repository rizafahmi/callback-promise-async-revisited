const { getProfile, getRepos, countTotalStars } = require("./helpers");

(async () => {
  try {
    const profile = await getProfile("rizafahmi");
    const repos = await getRepos(profile.data.items[0].login);
    const stars = await countTotalStars(repos.data);
    console.log(`Total stars: ${stars}`);
  } catch (e) {
    console.error(e);
  }
})();
