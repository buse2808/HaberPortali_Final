import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { map } from 'rxjs/operators';
import {
  Haber
} from 'src/app/models/haber';
import {
  Kategori
} from 'src/app/models/kategori';
import { FirebaseService } from 'src/app/servis/firebase.service';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticihaberislem',
  templateUrl: './yoneticihaberislem.component.html',
  styleUrls: ['./yoneticihaberislem.component.css']
})
export class YoneticihaberislemComponent implements OnInit {
  hata: boolean = false;
  mesaj: string;
  yeniHaber: Haber = new Haber();
  kategoriler: Kategori[];
  kategori: Kategori;
  key: string;
  constructor(private servis: FirebaseService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.kategoriliste();
    this.key = this.activeRoute.snapshot.paramMap.get("key")
    if (this.key) {
      this.haberbykey()
    }
  }

  kategoriliste() {
    this.servis.kategoriListele().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key:c.payload.key,...c.payload.val()})
          ))
          )
      .subscribe((d) => {
      this.kategoriler = d;
    })
  }

  haberEkle() {
    this.servis.kategoriByKey(this.yeniHaber.haberKategorikey).snapshotChanges().subscribe((d) => {
      const y = {...d.payload.toJSON(), key:d.payload.key} as Haber
      this.yeniHaber.kategoriAd = y.kategoriAd;
      this.yeniHaber.kategoriClassName=y.kategoriClassName;
      if (this.yeniHaber.key) {
        this.servis.haberDuzenle({...this.yeniHaber}).then((d) => {
          this.router.navigate(['../yoneticihaber'])
        })
      }
      else {
        this.yeniHaber.haberOkundu=0;
        this.yeniHaber.haberTarih=Date().toString();
        this.servis.haberEkle({...this.yeniHaber}).then((d) => {
          this.router.navigate(['../yoneticihaber'])
        })
      }
    })
  

  }
  haberbykey() {
    this.servis.haberByKey(this.key).snapshotChanges().subscribe((d) => {
      const y = {...d.payload.toJSON(), key:d.payload.key}
      this.yeniHaber = (y as Haber);
    })
  }
}
