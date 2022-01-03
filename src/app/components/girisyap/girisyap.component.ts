import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FirebaseKullanici
} from 'src/app/models/Kullanici';
import { FirebaseService } from 'src/app/servis/firebase.service';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-girisyap',
  templateUrl: './girisyap.component.html',
  styleUrls: ['./girisyap.component.css']
})
export class GirisyapComponent implements OnInit {

  hata: boolean = false;
  mesaj: string;
  constructor(public servis: FirebaseService,public router:Router) {}

  ngOnInit(): void {}

  GirisYap(mail, sifre) {
    if (mail == "" || sifre == "") {
      this.hata = true;
      this.mesaj = "Mail veya şifre boş olamaz";
    } else {
      const girisKullanici = new FirebaseKullanici();
      girisKullanici.kullaniciMail=mail;
      girisKullanici.kullaniciSifre=sifre;
      this.servis.OturumAc(girisKullanici).then(u=>{
        localStorage.setItem("user",JSON.stringify(u.user));
        this.router.navigate(['yoneticipaneli']);
      }).catch(err=>{
        this.hata = true;
        this.mesaj = "Mail veya şifre yanlış";
        console.log(err)
      })
    }
  }
}
