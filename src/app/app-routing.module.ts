import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
   path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'welcome',
   loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)},
 // {
   // path: 'login',
   // loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
 // {
   // path: 'signup',
   // loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)},
 // {
   // path: 'home',
    //loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
 // {
   // path: 'category',
   // loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)},
 // {
   // path: 'favorite',
   // loadChildren: () => import('./pages/favorite/favorite.module').then( m => m.FavoritePageModule)},
 // {
   // path: 'feed',
  //  loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)},
 // {
   // path: 'settings',
   // loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
