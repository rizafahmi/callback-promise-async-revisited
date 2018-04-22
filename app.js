const { getProfile, getRepos, countTotalStars } = require("./helpers");

const handleError = fn => (...params) => fn(...params).catch(e => {
      console.error(e);
    });

const safeGetProfile = handleError(getProfile);
safeGetProfile("rizafahmi");
