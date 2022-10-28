import axios from 'axios';

class GithubServices {
  private axiosGithub;

  constructor(axios) {
    this.axiosGithub = axios;
  }

  async getUsers(params): Promise<any> {
    if (params.length >= 3)
      return await axiosGithub.get(
        'search/users?q=' + params + '&per_page=' + 10
      );
    return {};
  }

  async getUser(params): Promise<any> {
    return await axiosGithub.get('users/' + params);
  }
  async getReposByUsername(username) {
    return await axiosGithub.get(`users/${username}/repos`);
  }

  async getLanguagesByRepo(username, repo_name) {
    return await axiosGithub.get(`repos/${username}/${repo_name}/languages`);
  }
}
const axiosGithub = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: 'Bearer  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'
  }
});
const githubServices = new GithubServices(axiosGithub);

export default githubServices;
