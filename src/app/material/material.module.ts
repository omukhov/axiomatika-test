import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

const material  = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule
]

@NgModule({
  declarations: [],
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
