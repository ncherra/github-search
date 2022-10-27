import { useQuery } from '@tanstack/react-query';
import githubServices from '../../GithubServices';

export default function useUsers(user) {
  const query = useQuery(['USERS'], () => githubServices.getUsers(user), {
    enabled: false,
    refetchOnWindowFocus: false,
    staleTime: 10000
  });
  return query;
}
