import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component'



export const appRoutes: Routes = [
    {path:'page', component: PageComponent}
]

export const routing = RouterModule.forRoot(appRoutes);