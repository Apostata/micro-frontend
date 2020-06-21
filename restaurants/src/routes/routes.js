import Japones from '../components/Pages/Japones';
import Italiano from '../components/Pages/Italiano';

export const routes = [
    {
        path: '/italiano',
        exact: true,
        component: Italiano,
       
    },
    {
        path: '/japones',
        exact: true,
        component: Japones,
    },
]