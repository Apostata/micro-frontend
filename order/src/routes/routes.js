import Buy from '../components/Pages/Buy';
import List from '../components/Pages/List';

export const routes = [
    {
        path: '/order/list',
        exact: true,
        component: List,
       
    },
    {
        path: '/order/buy',
        exact: true,
        component: Buy,
    },
]