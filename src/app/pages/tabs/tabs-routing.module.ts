import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageModule } from '../list/list.module';

import { TabsPage } from './tabs.page';
import { InfinitePageModule } from '../infinite/infinite.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'account',
        loadChildren: ()=>import('../avatar/avatar.module').then( m => m.AvatarPageModule)
      },
      {
        path:'lista',
        loadChildren: () => import('../list/list.module').then(m=>ListPageModule)
      },
      {
        path:'infinite',
        loadChildren: () => import('../infinite/infinite.module').then(m=>InfinitePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
