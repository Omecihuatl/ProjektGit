import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrderPackageComponent } from './order-package/order-package.component';
import { PackageStatusComponent } from './package-status/package-status.component';
import { PriceListComponent } from './price-list/price-list.component';

//Import Routingu i Serwisu do tworzenia widoku
import{RouterModule,Routes}  from  '@angular/router';
import {TrackingSearchService} from './tracking-search.service';
import {HttpModule} from '@angular/http';
import  {FormsModule}  from '@angular/forms'


//lista ścieżek
  const routesConfig:Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'status',component:PackageStatusComponent},
  {path:'order',component:OrderPackageComponent},
  {path:'priceList',component:PriceListComponent},
  {path:'**',component:HomePageComponent}

]
const routerModule = RouterModule.forRoot(routesConfig,{

//enableTracing:true,
//useHash:true

});


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    OrderPackageComponent,
    PackageStatusComponent,
    PriceListComponent
  ],
  imports: [
    BrowserModule,
    routerModule,
    HttpModule,//import modulu do pobierania z serwera
    FormsModule//formularze
  ],
  providers: [TrackingSearchService],//tworzenie usługi do widoku
  bootstrap: [AppComponent]
})
export class AppModule { }
