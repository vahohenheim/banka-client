/// <reference types="react" />
declare const routes: {
    path: string;
    name: string;
    component: import("react").FC<{}>;
    exact: boolean;
    display: boolean;
    sitemap: boolean;
}[];
export default routes;
