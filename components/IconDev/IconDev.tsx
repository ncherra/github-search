import { useEffect } from 'react';
import useIcon from 'services/query/api_devicon/useIcon';
import Parse from 'html-react-parser';

export default function IconDev({ name }) {
  const { refetch: GetIcon, data: IconSVG } = useIcon(name);

  useEffect(() => {
    console.log(name);
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
    <div style={{ width: '2em' }}>
      <Icon />
    </div>
  );
}
