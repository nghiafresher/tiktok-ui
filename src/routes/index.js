import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import {LayoutOnlyHeader} from "~/components/Layout";
//Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile, layout: null},
    { path: '/upload', component: Upload, layout: LayoutOnlyHeader},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes}