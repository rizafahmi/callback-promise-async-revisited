const request = require("request");

const BASE_URL = `https://api.github.com`;

const getProfile = (username, cb) => {
  const options = {
    url: `${BASE_URL}/search/users?q=${username}`,
    headers: {
      "User-Agent": "request"
    }
  };
  request(options, (err, resp, body) => {
    if (err) cb(err);
    cb(null, body);
  });
};

const getRepos = (username, cb) => {
  const options = {
    url: `${BASE_URL}/users/${username}/repos?per_page=100`,
    headers: {
      "User-Agent": "request"
    }
  };
  request(options, (err, resp, body) => {
    if (err) cb(err);
    cb(null, body);
  });
};

const countTotalStars = (repos, cb) => {
  cb(null, repos.reduce((prev, curr) => prev + curr.stargazers_count, 0));
};

module.exports = {
  getProfile,
  getRepos,
  countTotalStars
};
