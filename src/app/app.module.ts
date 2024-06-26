import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { FormsModule } from '@angular/forms';
import { ExpenseTableComponent } from './expense-table/expense-table.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetDashboardComponent } from './budget-dashboard/budget-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ExpenseEntryComponent,
    ExpenseTableComponent,
    BudgetDashboardComponent,
    AboutUsComponent,
    ExpenseEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
