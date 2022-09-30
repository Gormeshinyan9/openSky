import {ICommonNavigationWithIcon} from '~/types';
import {ProjectsIcon} from '~/assets';

import Route from '../route';

const Navigation: ICommonNavigationWithIcon[] = [
  {
    name: 'Dashbaord',
    route: Route.Home,
    Icon: ProjectsIcon,
  },
];

export default Navigation;
