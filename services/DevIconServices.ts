import axios from 'axios';

class DevIconServices {
  private axiosDevIcon;

  constructor(axios) {
    this.axiosDevIcon = axios;
  }

  async getIconSvg(iconName: string) {
    if (iconName && iconName.length > 0) {
      iconName = iconName.replace('#', 'sharp');
      iconName = iconName.replace('#', 'sharp');
      iconName = iconName.replace('+', 'plus');
      iconName = iconName.replace('+', 'plus');
      iconName = iconName.toLocaleLowerCase();
      return await this.axiosDevIcon.get(
        `${iconName}/${iconName}-original.svg`
      );
    }
  }
}
const axiosDevIcon = axios.create({
  baseURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'
});
const devIconServices = new DevIconServices(axiosDevIcon);
export default devIconServices;
