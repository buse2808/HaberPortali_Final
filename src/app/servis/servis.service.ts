import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Haber
} from '../models/haber';
import {
  Kategori
} from '../models/kategori';
import {
  FirebaseKullanici
} from '../models/Kullanici';

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  apiUrl = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) {}

  kategoriekle(k: Kategori) {
    return this.httpClient.post(this.apiUrl + "kategori", k);
  }
  kategoriliste() {
    return this.httpClient.get(this.apiUrl + "kategori");
  }
  kategoribykey(key: string) {
    return this.httpClient.get(this.apiUrl + "kategori?key=" + key);
  }
  kategoriduzenle(k: Kategori) {
    return this.httpClient.put(this.apiUrl + "kategori/" + k.id, k);
  }
  kategorisil(id: string) {
    return this.httpClient.delete(this.apiUrl + "kategori/" + id);
  }

  haberekle(h: Haber) {
    return this.httpClient.post(this.apiUrl + "haber", h);
  }
  haberliste() {
    return this.httpClient.get(this.apiUrl + "haber");
  }
  haberbykey(key: string) {
    return this.httpClient.get(this.apiUrl + "haber?key=" + key);
  }
  haberbykategori(kategori: string) {
    return this.httpClient.get(this.apiUrl + "haber?kategoriAd=" + kategori);
  }
  haberduzenle(h: Haber) {
    return this.httpClient.put(this.apiUrl + "haber/" + h.id, h);
  }
  habersil(id: string) {
    return this.httpClient.delete(this.apiUrl + "haber/" + id);
  }

  OturumKontrol() {
    var token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  GirisYap(mail: string, sifre: string) {
    return this.httpClient.get(this.apiUrl + "kullanici?kullaniciMail=" + mail + "&kullaniciSifre=" + sifre);
  }

  ParolaUret(s: number) {
    var st: string = "abcdefghijklmnopqrstuvwxyz0123456789";
    var p = "";
    for (let i = 0; i < s; i++) {
      var r = Math.floor(Math.random() * st.length);
      p += st.charAt(r);
    }
    return p;
  }
  
  kullaniciekle(u: FirebaseKullanici) {
    return this.httpClient.post(this.apiUrl + "kullanici", u);
  }
  kullaniciliste() {
    return this.httpClient.get(this.apiUrl + "kullanici");
  }
  kullanicibykey(key: string) {
    return this.httpClient.get(this.apiUrl + "kullanici?key=" + key);
  }
  kullaniciduzenle(u: FirebaseKullanici) {
    return this.httpClient.put(this.apiUrl + "kullanici/" + u.id, u);
  }
  kullanicisil(id: string) {
    return this.httpClient.delete(this.apiUrl + "kullanici/" + id);
  }

}
