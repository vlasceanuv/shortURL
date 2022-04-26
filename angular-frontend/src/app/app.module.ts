import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateShortURLComponent } from './create-shortURL/create-shortURL.component';
import { FormsModule} from '@angular/forms';
import { ShortURLDetailsComponent } from './shortURL-details/shortURL-details.component';
import { ShortURLVisitComponent } from './short-urlvisit/short-urlvisit.component';
import { LoginComponent } from './login/login.component';
import { StatisticsComponent } from './statistics/statistics.component'
import { HttpInterceptorService } from './httpInterceptor.service';
import { MatInputModule} from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    CreateShortURLComponent,
    ShortURLDetailsComponent,
    ShortURLVisitComponent,
    LoginComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
