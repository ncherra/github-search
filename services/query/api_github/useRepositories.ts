import { useQuery } from '@tanstack/react-query';
import githubServices from '../../GithubServices';

export default function useRepositories(username, setRepos) {
  const query = useQuery(
    ['REPOS' + username],
    () => githubServices.getReposByUsername(username),
    {
      refetchOnWindowFocus: false,
      staleTime: 10000,
      onSuccess: (res) => {
        setRepos(res.data);
      }
    }
  );
  return query;
}
