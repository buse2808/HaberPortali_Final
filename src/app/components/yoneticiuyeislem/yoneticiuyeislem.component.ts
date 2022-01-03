import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseKullanici } from 'src/app/models/Kullanici';
import { FirebaseService } from 'src/app/servis/firebase.service';

@Component({
  selector: 'app-yoneticiuyeislem',
  templateUrl: './yoneticiuyeislem.component.html',
  styleUrls: ['./yoneticiuyeislem.component.css']
})
export class YoneticiuyeislemComponent implements OnInit {

  kullanici: FirebaseKullanici = new FirebaseKullanici();
  key: string;
  constructor(private servis: FirebaseService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.key = this.activeRoute.snapshot.paramMap.get("key")
    if (this.key) {
      this.kullanicibykey();
    }
  }

  kullaniciEkle() {
    if (this.kullanici.key) {
      this.servis.uyeDuzenle(this.kullanici).then((d)=>{
        this.router.navigate(['../yoneticiuye'])
      })
    } else {
      this.servis.uyeEkle(this.kullanici).then((d) => {
        this.router.navigate(['../yoneticiuye'])
      })
    }

  }
  kullanicibykey() {
    this.servis.uyeByKey(this.key).snapshotChanges().subscribe((d) => {
      const y = {...d.payload.toJSON(), key:d.payload.key}
      this.kullanici = (y as FirebaseKullanici);
    })
  }

}
