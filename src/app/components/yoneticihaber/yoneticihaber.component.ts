import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Haber } from 'src/app/models/haber';
import { FirebaseService } from 'src/app/servis/firebase.service';
import { ServisService } from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticihaber',
  templateUrl: './yoneticihaber.component.html',
  styleUrls: ['./yoneticihaber.component.css']
})
export class YoneticihaberComponent implements OnInit {

  haberler: Haber[];

  constructor(private servis: FirebaseService, private router: Router) {}

  ngOnInit(): void {
    this.haberliste();
  }

  haberliste() {
    this.servis.haberListele().snapshotChanges().pipe(map(changes=>
      changes.map(c=>
        ({key:c.payload.key,...c.payload.val()})
        )))
    .subscribe((d) => {
      this.haberler = d;
    })
  }
  haberduzenle(k: Haber) {
    this.router.navigate(['../yoneticihaberislemleri', k.key])
  }
  habersil(id: string) {
    this.servis.haberSil(id).then(d => {
      this.haberliste();
    })
  }
}
