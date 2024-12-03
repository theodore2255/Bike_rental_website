import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { PostBikeComponent } from './components/post-bike/post-bike.component'
import { UpdateBikeComponent } from './components/update-bike/update-bike.component'
import { GetBookingsComponent } from './components/get-bookings/get-bookings.component'
import { SearchBikeComponent } from './components/search-bike/search-bike.component'

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'bike', component: PostBikeComponent },
  { path: 'bike/:id', component: UpdateBikeComponent },
  { path: 'bookings', component: GetBookingsComponent },
  { path: 'search', component: SearchBikeComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
