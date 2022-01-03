import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GirisyapComponent } from './components/girisyap/girisyap.component';
import { HaberdetayComponent } from './components/haberdetay/haberdetay.component';
import { YoneticiComponent } from './components/yonetici/yonetici.component';
import { YoneticikategoriComponent } from './components/yoneticikategori/yoneticikategori.component';
import { YoneticikategoriislemComponent } from './components/yoneticikategoriislem/yoneticikategoriislem.component';
import { YoneticihaberComponent } from './components/yoneticihaber/yoneticihaber.component';
import { YoneticihaberislemComponent } from './components/yoneticihaberislem/yoneticihaberislem.component';
import { HaberkategoriComponent } from './components/haberkategori/haberkategori.component';
import { YoneticiuyeComponent } from './components/yoneticiuye/yoneticiuye.component';
import { YoneticiuyeislemComponent } from './components/yoneticiuyeislem/yoneticiuyeislem.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GirisyapComponent,
    HaberdetayComponent,
    YoneticiComponent,
    YoneticikategoriComponent,
    YoneticikategoriislemComponent,
    YoneticihaberComponent,
    YoneticihaberislemComponent,
    HaberkategoriComponent,
    YoneticiuyeComponent,
    YoneticiuyeislemComponent,
    UyeolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
