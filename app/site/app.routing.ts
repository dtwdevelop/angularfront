/**
 * Created by hider on 14/02/2017.
 */
import {RouterModule} from  '@angular/router'
import {CommentsComponent} from './app.comments';
import {PostComponent} from './app.post';
import {WelcomeComponent} from './app.welcome';
import {DetailComponent} from './app.detail';
import {ContactComponent} from './app.contact';
import {ServicesComponent} from "./app.services";
import {PortfolioComponent} from "./app.portfolio";
import {SiteComponent} from './site.component';

export const routing = RouterModule.forChild([
    {path: '', component:SiteComponent ,children:[

        {

            path: '',
            component: WelcomeComponent

        },
        {
            path :'blog',
            component :PostComponent
        },
        {
            path: 'blog/:id',
            component :DetailComponent
        },
        {
            path: 'portfolio',
            component :PortfolioComponent
        },
        {
            path: 'services',
            component : ServicesComponent
        },

        {
            path: 'contact',
            component:ContactComponent
        },
    ]
    },
]);
