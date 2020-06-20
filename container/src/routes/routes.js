
import MicroFrontend from '../MicroFrontend';
const ENV = process.env;

const Restaurants = ({ history }) => {
    return (
        <MicroFrontend history={history} host={ENV.RESTAURANTS_HOST} name="Restaurants" />
    );
}

const Order = ({ history }) => (
    <MicroFrontend history={history} host={ENV.ORDER_HOST} name="Order" />
);

export const routes = [
    {
        path: '/',
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
]