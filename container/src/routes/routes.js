
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
        component: Restaurants,
        useActions:[
            {
                actionCreator:'language', actions:['setLanguage', 'getLanguage']
            },
            {
                actionCreator:'another', actions:['setAnother']
            }
        ]
    },
    {
        path: '/italiano', //forca o carregamento do microfrontend Restaurants se recarregar a página
        exact: true,
        name: 'Restaurants',
        component: Restaurants,
        useActions:[
            {
                actionCreator:'language', actions:['setLanguage', 'getLanguage']
            },
            {
                actionCreator:'another', actions:['setAnother']
            }
        ]
    },
    {
        path: '/japones', //forca o carregamento do microfrontend Restaurants se recarregar a página
        exact: true,
        name: 'Restaurants',
        component: Restaurants,
        useActions:[
            {
                actionCreator:'language', actions:['setLanguage', 'getLanguage']
            },
            {
                actionCreator:'another', actions:['setAnother']
            }
        ]
    },
    {
        path: '/order', 
        exact: true,
        name: 'Order',
        component: Order,
        useActions:[
            {
                actionCreator:'language', actions:['setLanguage']
            }
        ]
    },
    {
        path: '/order/buy', //forca o carregamento do microfrontend Order se recarregar a página
        exact: true,
        name: 'Order',
        component: Order,
        useActions:[
            {
                actionCreator:'language', actions:['setLanguage']
            }
        ]
    },
    {
        path: '/order/list', //forca o carregamento do microfrontend Order se recarregar a página
        exact: true,
        name: 'Order',
        component: Order,
        useActions:[
            {
                actionCreator:'language', actions:['setLanguage']
            }
        ]
    }
    
    
]