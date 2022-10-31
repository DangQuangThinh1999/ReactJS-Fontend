import Details from '~/pages/Details';
import Project from '~/pages/Project';
import Home from '~/pages/Home';
import { SeeLayout } from '~/components/Layout';

const publicRoutes = [
    { path: '/details', component: Details, layout: null },

    { path: '/project', component: Project, layout: SeeLayout },
    { path: '/', component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
