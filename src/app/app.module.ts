import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatButtonModule } from '@angular/material/button';
import { TableDataService } from './table-data.service';
import { MatTableModule } from '@angular/material/table';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TableDemoComponent,
    FormDetailsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TableDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
