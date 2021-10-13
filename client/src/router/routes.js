import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Courses from "../pages/Courses";
import Profile from "../pages/Profile";
import TestChoose from "../pages/TestChoose";
import Test from "../pages/Test";
import CourseEco from "../pages/CourseEco";
import EcoMain from "../components/courses/eco/EcoMain";

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/registration', component: Registration, exact: true},
]

export const privateRoutes = [
    {path: '/courses/:name', component: CourseEco, exact: true},
    {path: '/courses', component: Courses, exact: true},
    {path: '/profile', component: Profile, exact: true},
    {path: '/test_choose', component: TestChoose, exact: true},
    {path: '/test', component: Test, exact: true},
]

export const ecoRoutes = [
    {path: '/courses/eco/1', component: EcoMain, exact: true},
]