const { getProfile, getRepos, countTotalStars } = require("./helpers");

(async () => {
  const profile = await getProfile("rizafahmi").catch(e => console.error(e));
  const repos = await getRepos(profile.data.items[0].login).catch(e =>
    console.error(e)
  );
  const stars = countTotalStars(repos.data);
  console.log(`Total stars: ${stars}`);
})();
