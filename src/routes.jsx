import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layuot/MainLayout";
import About from "./components/pages/About";
import Home from "./components/pages/home/Home";
import Blog from "./components/pages/blog/Blog";
import NotFound from "./components/pages/NotFound";
import SingleBlogPage from "./components/pages/singlePage/SingleBlogPage";

const routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
        {index:true, element:<Home/>},
        {path:'/blog', element:<Blog/>},
        { path: 'blog/:id', element: <SingleBlogPage /> },
        {path:'/about', element:<About/>},
        {path:'*', element:<NotFound/>}
    ]}
])
export default routes