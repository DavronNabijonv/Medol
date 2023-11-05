import BuildPage from "./buildPage"
import Homepage from "./homepage"
import Product from "./product"
import Services from "./services"

export const routes = [
    {
        id:1,
        path:'/',
        element:<Homepage />
    },
    {
        id:2,
        path:'/product',
        element:<Product />
    },
    {
        id:3,
        path:'/buildPage',
        element:<BuildPage />
    },
    {
        id:4,
        path:'/services',
        element:<Services/>
    }
]