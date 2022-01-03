import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import { Haber } from '../models/haber';
import { Kategori } from '../models/kategori';
import { FirebaseKullanici } from '../models/Kullanici';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbKategori = "/Kategoriler";
  private dbUye="/Uyeler";
  private dbHaber ="/Haberler";
  
  kategoriRef:AngularFireList<Kategori> =null;
  uyeRef : AngularFireList<FirebaseKullanici> = null;
  haberRef:AngularFireList<Haber> = null;

  constructor(
    public db:AngularFireDatabase,
    public fbAuth:AngularFireAuth
  ) { 
    this.kategoriRef = this.db.list(this.dbKategori);
    this.uyeRef = this.db.list(this.dbUye);
    this.haberRef = this.db.list(this.dbHaber);
    }


  OturumAc(uye:FirebaseKullanici){
    return this.fbAuth.signInWithEmailAndPassword(uye.kullaniciMail,uye.kullaniciSifre);
  }

  OturumAcan() {
    return JSON.parse(localStorage.getItem('user')).email
  }

  OturumKontrol() {
    var token = localStorage.getItem("user");
    return token ? true :false;
  }

  uyeOl(uye: FirebaseKullanici) {
    return this.fbAuth.createUserWithEmailAndPassword(uye.kullaniciMail, uye.kullaniciSifre);
  }

  // üye işlemleri
  uyeListele() {
    return this.uyeRef;
  }
  uyeEkle(u: FirebaseKullanici) {
    return this.uyeRef.push(u);
  }
  uyeByKey(key: string) {
    return this.db.object(this.dbUye+"/" + key);
  }

  uyeDuzenle(u: FirebaseKullanici) {
    return this.uyeRef.update(u.key, u);
  }
  uyeSil(key: string) {
    return this.uyeRef.remove(key);
  }        
  // Kategori işlemleri
    kategoriListele() {
      return this.kategoriRef;
    }
    kategoriEkle(k: Kategori) {
      return this.kategoriRef.push(k);
    }
    kategoriByKey(key: string) {
      return this.db.object(this.dbKategori+"/" + key);
    }

    kategoriDuzenle(k: Kategori) {
      return this.kategoriRef.update(k.key, k);
    }
    kategoriSil(key: string) {
      return this.kategoriRef.remove(key);
    }
  // Haber işlemleri
  haberListele() {
    return this.haberRef;
  }
  haberEkle(h: Haber) {
    return this.haberRef.push(h);
  }
  haberByKey(key: string) {
    return this.db.object(this.dbHaber+"/" + key);
  }
  haberByKategori(kategoriAd:string){
    return this.db.list(this.dbHaber, ref=>ref.orderByChild('kategoriAd').equalTo(kategoriAd));
  }
  haberDuzenle(h: Haber) {
    return this.haberRef.update(h.key, h);
  }
  haberSil(key: string) {
    return this.haberRef.remove(key);
  }
}
