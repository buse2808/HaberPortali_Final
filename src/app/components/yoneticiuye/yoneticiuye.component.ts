import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FirebaseKullanici } from 'src/app/models/Kullanici';
import { FirebaseService } from 'src/app/servis/firebase.service';
import { ServisService } from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticiuye',
  templateUrl: './yoneticiuye.component.html',
  styleUrls: ['./yoneticiuye.component.css']
})
export class YoneticiuyeComponent implements OnInit {

  kullanicilar: FirebaseKullanici[];

  constructor(private servis: FirebaseService, private router: Router) {}

  ngOnInit(): void {
    this.kullaniciliste();
  }

  kullaniciliste() {
    this.servis.uyeListele().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key:c.payload.key,...c.payload.val()})
          ))
          )
      .subscribe((d) => {
      this.kullanicilar = d;
    })
  }
  kullaniciduzenle(k: FirebaseKullanici) {
    this.router.navigate(['../yoneticiuyeislemleri',  k.key])
  }
  kullanicisil(id: string) {
    this.servis.uyeSil(id).then(d => {
      this.kullaniciliste();
    })
  }

}
