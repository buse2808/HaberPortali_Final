import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GirisyapComponent } from './components/girisyap/girisyap.component';
import { HaberdetayComponent } from './components/haberdetay/haberdetay.component';
import { HaberkategoriComponent } from './components/haberkategori/haberkategori.component';
import { HomeComponent } from './components/home/home.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { YoneticiComponent } from './components/yonetici/yonetici.component';
import { YoneticihaberComponent } from './components/yoneticihaber/yoneticihaber.component';
import { YoneticihaberislemComponent } from './components/yoneticihaberislem/yoneticihaberislem.component';
import { YoneticikategoriComponent } from './components/yoneticikategori/yoneticikategori.component';
import { YoneticikategoriislemComponent } from './components/yoneticikategoriislem/yoneticikategoriislem.component';
import { YoneticiuyeComponent } from './components/yoneticiuye/yoneticiuye.component';
import { YoneticiuyeislemComponent } from './components/yoneticiuyeislem/yoneticiuyeislem.component';
import { AuthGuard } from './servis/auth.guard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"girisyap", component:GirisyapComponent},
  {path:"uyeol", component:UyeolComponent},
  {path:"d/:id", component:HaberdetayComponent},
  {path:"k/:kategori", component:HaberkategoriComponent},
  {path:"yoneticipaneli", component:YoneticiComponent, canActivate: [AuthGuard] },
  {path:"yoneticikategori", component:YoneticikategoriComponent, canActivate:[AuthGuard]},
  {path:"yoneticikategoriislemleri/:key", component:YoneticikategoriislemComponent, canActivate:[AuthGuard]},
  {path:"yoneticihaber", component:YoneticihaberComponent, canActivate:[AuthGuard]},
  {path:"yoneticihaberislemleri/:key", component:YoneticihaberislemComponent, canActivate:[AuthGuard]},
  {path:"yoneticiuye", component:YoneticiuyeComponent, canActivate:[AuthGuard]},
  {path:"yoneticiuyeislemleri/:key", component:YoneticiuyeislemComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
