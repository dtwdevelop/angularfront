import {RouterModule,ExtraOptions} from  '@angular/router'

//import {AdminComponent} from "./admin/admin.component";

const config: ExtraOptions = {
    useHash: true,
};
export const routing = RouterModule.forRoot([
    {
        path: 'site', loadChildren: './site/site.module#SiteModule'
    },

    // {
    //     path: 'admin',
    //     component:AdminComponent
    // },
	
	// {path: 'pages', loadChildren: './pages/pages.module#PagesModule'},

    { path: 'admin', redirectTo: 'site', pathMatch: 'full' },


]);
