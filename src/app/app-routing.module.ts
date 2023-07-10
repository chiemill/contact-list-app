import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ViewComponent } from "./view/view.component";
import { HomeComponent } from "./home/home.component";
import { TableComponent } from "./table/table.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contacts/add", component: FormComponent },
  { path: "contacts/view/:contactId", component: ViewComponent },
  { path: "contacts/edit/:contactId", component: EditComponent },
  { path: "contacts/allContacts", component: TableComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
