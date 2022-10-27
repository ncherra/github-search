import { useQuery } from '@tanstack/react-query';
import githubServices from '../../GithubServices';

export default function useLanguagesByRepo(username, repo_name) {
  const query = useQuery(
    ['LanguagesByRepo'],
    () => githubServices.getLanguagesByRepo(username, repo_name),
    {
      refetchOnWindowFocus: false,
      cacheTime: 1
    }
  );
  return query;
}
