import {useRoutes} from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import HomePage from "../pages/apps/Home";
import NewsPage from "../pages/apps/News";
import Contacts from "../pages/apps/Contacts";
import MembersPage from "../pages/apps/Members";
import PrinciplesPage from "../pages/apps/Principles";


function Router() {
    const routes = [
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path: "/news",
                    element: <NewsPage/>
                },
                {
                    path: "/contact-us",
                    element: <Contacts/>
                },
                {
                    path: "/members",
                    element: <MembersPage/>
                },
                {
                    path: "/principles",
                    element: <PrinciplesPage/>
                },
            ]
        }
    ]

    return useRoutes(routes);
}

export default Router