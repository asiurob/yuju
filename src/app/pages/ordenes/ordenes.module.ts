import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { OrdenesComponent } from './ordenes.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [OrdenesComponent],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatTabsModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ]
})
export class OrdenesModule { }
