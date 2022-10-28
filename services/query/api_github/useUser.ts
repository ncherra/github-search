import { useQuery } from '@tanstack/react-query';
import githubServicees from '../../GithubServices';

export default function useUser(user) {
  const query = useQuery(['USER' + user], () => githubServicees.getUser(user), {
    enabled: false,
    staleTime: 2000
  });
  return query;
}
