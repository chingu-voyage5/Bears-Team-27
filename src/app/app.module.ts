import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: "index",
    component: IndexComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    LoginComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
