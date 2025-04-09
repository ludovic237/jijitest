import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CategoryComponent} from './pages/category/category.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':categoryName', component: CategoryComponent },
  { path: ':categoryName/:id', component: ProductDetailComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductDetailComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];
