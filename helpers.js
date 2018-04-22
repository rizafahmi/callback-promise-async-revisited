const request = require("axios");

const BASE_URL = `https://api.github.com`;

const getProfile = username => {
  const options = {
    url: `${BASE_URL}/search/users?q=${username}`,
    headers: {
      "User-Agent": "request"
    },
    method: "GET"
  };
  return request(options);
};

const getRepos = username => {
  const options = {
    url: `${BASE_URL}/users/${username}/repos?per_page=100`,
    headers: {
      "User-Agent": "request"
    },
    method: "GET"
  };
  return request(options);
};

const countTotalStars = repos => repos.reduce((prev, curr) => prev + curr.stargazers_count, 0);

module.exports = {
  getProfile,
  getRepos,
  countTotalStars
};
