import { useQuery } from '@tanstack/react-query';
import githubServices from '../../GithubServices';

export default function useLanguagesByRepo(username, repo_name) {
  const query = useQuery(
    ['LanguagesByRepo' + repo_name],
    async () =>
      Object.keys(
        (await githubServices.getLanguagesByRepo(username, repo_name)).data
      ),
    {
      refetchOnWindowFocus: false,
      cacheTime: 1
    }
  );
  return query;
}
