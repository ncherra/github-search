import { useQuery } from '@tanstack/react-query';
import devIconServices from '../../DevIconServices';
import githubServices from '../../GithubServices';

export default function useIcon(iconName_IT) {
  const query = useQuery(
    ['ICON' + iconName_IT],
    () => devIconServices.getIconSvg(iconName_IT),
    {
      enabled: false,
      staleTime: 2000,
      refetchOnWindowFocus: false
    }
  );
  return query;
}
