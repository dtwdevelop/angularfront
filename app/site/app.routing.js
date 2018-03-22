"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by hider on 14/02/2017.
 */
var router_1 = require("@angular/router");
var app_post_1 = require("./app.post");
var app_welcome_1 = require("./app.welcome");
var app_detail_1 = require("./app.detail");
var app_contact_1 = require("./app.contact");
var app_services_1 = require("./app.services");
var app_portfolio_1 = require("./app.portfolio");
exports.routing = router_1.RouterModule.forRoot([
    {
        path: '',
        component: app_welcome_1.WelcomeComponent
    },
    {
        path: 'blog',
        component: app_post_1.PostComponent
    },
    {
        path: 'blog/:id',
        component: app_detail_1.DetailComponent
    },
    {
        path: 'portfolio',
        component: app_portfolio_1.PortfolioComponent
    },
    {
        path: 'services',
        component: app_services_1.ServicesComponent
    },
    {
        path: 'contact',
        component: app_contact_1.ContactComponent
    }
]);
