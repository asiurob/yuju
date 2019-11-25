import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material imports
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { LoaderComponent } from './shared/loader/loader.component';



@NgModule({
  declarations: [PagesComponent, LoaderComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,

    MatSidenavModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
