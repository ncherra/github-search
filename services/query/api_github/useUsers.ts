import { useQuery } from '@tanstack/react-query';
import githubServices from '../../GithubServices';

export default function useUsers(user, setApiLimit) {
  const query = useQuery(['USERS'], () => githubServices.getUsers(user), {
    enabled: false,
    refetchOnWindowFocus: false,
    staleTime: 10000,
    onError: (e) => {
      setApiLimit(true);
    },
    onSuccess: () => {
      setApiLimit(true);
    }
  });
  return query;
}
