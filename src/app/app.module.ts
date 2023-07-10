import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ContactService } from './contact-service/contact-service.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PageNotFoundComponent,
    TableComponent,
    HomeComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Move ReactiveFormsModule to the imports array
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
