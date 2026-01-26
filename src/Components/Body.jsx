import { createBrowserRouter, RouterProvider } from "react-router"
import { Browse } from "./Browse"
import { Header } from "./Header"
import SignUp from "./Signup"

export const Body= () => {
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <SignUp />

        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}