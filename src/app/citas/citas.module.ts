import {NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasRoutingModule } from './citas-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormDataComponent } from './pages/form-data/form-data.component';
import {HttpClientModule} from '@angular/common/http';
import { ChatComponent } from './pages/chat/chat.component';


@NgModule({
  declarations: [
    HomeComponent,
    FormDataComponent,
    ChatComponent
    

  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    MaterialModule,
    HttpClientModule,
 

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CitasModule { }
