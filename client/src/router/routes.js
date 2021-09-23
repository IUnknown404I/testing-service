import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Information from "../pages/Information";
import Profile from "../pages/Profile";
import TestChoose from "../pages/TestChoose";
import Test from "../pages/Test";

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/registration', component: Registration, exact: true},
]

export const privateRoutes = [
    {path: '/info', component: Information, exact: true},
    {path: '/profile', component: Profile, exact: true},
    {path: '/test_choose', component: TestChoose, exact: true},
    {path: '/test', component: Test, exact: true},
]