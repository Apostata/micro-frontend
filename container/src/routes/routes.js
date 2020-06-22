
import MicroFrontend from '../MicroFrontend';
const ENV = process.env;

const Restaurants = ({ history, useActions }) => { //extracted from props
    return (
        <MicroFrontend history={history} host={ENV.RESTAURANTS_HOST} name="Restaurants" useActions={useActions}/>
    );
}

const Order = ({ history, useActions }) => (
    <MicroFrontend history={history} host={ENV.ORDER_HOST} name="Order" useActions={useActions}/>
);

export const routes = [
    {
        path: '/',
        exact: true,
        name: 'Restaurants',
        component: Restaurants
    },
    {
        path: '/italiano', //forca o carregamento do microfrontend Restaurants se recarregar a página
        exact: true,
        name: 'Restaurants',
        component: Restaurants
    },
    {
        path: '/japones', //forca o carregamento do microfrontend Restaurants se recarregar a página
        exact: true,
        name: 'Restaurants',
        component: Restaurants
    },
    {
        path: '/order', 
        exact: true,
        name: 'Order',
        component: Order
    },
    {
        path: '/order/buy', //forca o carregamento do microfrontend Order se recarregar a página
        exact: true,
        name: 'Order',
        component: Order
    },
    {
        path: '/order/list', //forca o carregamento do microfrontend Order se recarregar a página
        exact: true,
        name: 'Order',
        component: Order
    }    
]