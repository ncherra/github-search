import { useQuery } from '@tanstack/react-query';
import githubServices from '../../GithubServices';

export default function useRepositories(username, setOwner) {
  const query = useQuery(
    ['REPOS'],
    () => githubServices.getReposByUsername(username),
    {
      refetchOnWindowFocus: false,
      staleTime: 10000,
      onSuccess: (res) => {
        if (Array.isArray(res.data) && res.data?.length > 0)
          setOwner(res.data[0].owner);
      }
    }
  );
  return query;
}
