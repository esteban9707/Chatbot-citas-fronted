import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormDataComponent } from './pages/form-data/form-data.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path: 'citas',
         component: FormDataComponent,
      },
      {
        path: 'chat',
        component: ChatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
