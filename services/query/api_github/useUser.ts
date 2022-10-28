import { useQuery } from '@tanstack/react-query';
import githubServicees from '../../GithubServices';

export default function useUser(user, firstRender = false) {
  const query = useQuery(['USER' + user], () => githubServicees.getUser(user), {
    enabled: firstRender,
    staleTime: 2000
  });
  return query;
}
