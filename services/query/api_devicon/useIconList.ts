import { useQuery } from '@tanstack/react-query';
import devIconServices from '../../DevIconServices';
import githubServices from '../../GithubServices';

export default function useIconList(iconNames) {
  const query = useQuery(
    ['USER'],
    async () => {
      return await Promise.all(
        iconNames.map(async (iconName) => {
          const res = await devIconServices.getIconSvg(iconName);
          return res.data;
        })
      );
    },
    {
      enabled: false,
      staleTime: 2000
    }
  );
  return query;
}
