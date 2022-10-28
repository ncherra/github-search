import { useQuery } from '@tanstack/react-query';
import githubServices from '../../GithubServices';

export default function useRepositories(username) {
  const query = useQuery(
    ['REPOS' + username],
    () => githubServices.getReposByUsername(username),
    {
      refetchOnWindowFocus: false,
      staleTime: 10000
    }
  );
  return query;
}
