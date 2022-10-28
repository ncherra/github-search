import { useEffect } from 'react';
import useIcon from 'services/query/api_devicon/useIcon';
import Parse from 'html-react-parser';
import { width } from '@mui/system';

export default function IconDev({ name, style = {} }) {
  const { refetch: GetIcon, data: IconSVG, error } = useIcon(name);

  useEffect(() => {
    setTimeout(() => {
      GetIcon();
    }, 500);
  }, []);

  function Icon() {
    if (IconSVG?.data) {
      let iconJSX = Parse(IconSVG.data.toString());
      if (typeof iconJSX !== 'string' && !Array.isArray(iconJSX))
        return iconJSX;
    }
    return <></>;
  }

  return (
    <div
      style={{
        width: '2em',
        marginRight: '1em',
        verticalAlign: 'bottom',
        display: error !== null ? 'inline-block' : 'block'
      }}
    >
      {error === null && IconSVG?.data && <Icon />}
    </div>
  );
}
