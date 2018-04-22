const { getProfile, getRepos, countTotalStars } = require("./helpers");

const handleError = fn => (...params) =>
  fn(...params).catch(e => {
    console.error(e);
  });

const safeGetProfile = handleError(getProfile);
(async () => {
  const riza = await safeGetProfile("rizafahmi");
  console.log(riza.data.items[0].login);
})();
