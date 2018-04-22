const { getProfile, getRepos, countTotalStars } = require("./helpers");

(async () => {
  const riza = await getProfile("rizafahmi");
  const hengki = await getProfile("hengkiardo");
  console.log(riza.data.items, hengki.data.items);
})();
