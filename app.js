const { getProfile, getRepos, countTotalStars } = require("./helpers");

(async () => {
  const riza_profile = await getProfile("rizafahmi");
  const riza_repos = await getRepos(riza_profile.login);
  const riza_stars = countTotalStars(riza_repos);
  console.log(riza_stars);
})();
