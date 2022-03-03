import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'floating-banner', loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule) }, 
{ path: 'e-commerce', loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.ECommerceModule) },
 { path: 'sibling-timer', loadChildren: () => import('./sibling-timer/sibling-timer.module').then(m => m.SiblingTimerModule) },
  { path: 'service-timer', loadChildren: () => import('./service-timer/service-timer.module').then(m => m.ServiceTimerModule) }, 
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
   { path: 'dynamic-div', loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
