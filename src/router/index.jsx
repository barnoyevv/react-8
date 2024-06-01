import { Route, RouterProvider,  createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import App from '../App'
import { Login, Users, Blog, Contact, Hero, Logo } from "../pages"
const index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
            <Route index element={<Login />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/hero" element={<Hero />}/>
            <Route path="/logo" element={<Logo />}/>

            </Route>
        )
    )
  return <RouterProvider router={router}/>
}

export default index