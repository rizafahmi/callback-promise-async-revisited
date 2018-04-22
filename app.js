const { getProfile, getRepos, countTotalStars } = require("./helpers");

const riza = getProfile("rizafahmi");
const hengki = getProfile("hengkiardo");

Promise.all([riza, hengki]).then(([rizaProfile, hengkiProfile]) => {
  console.log(
    rizaProfile.data.items[0].login,
    hengkiProfile.data.items[0].login
  );
});
