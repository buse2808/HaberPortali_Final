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
  Kategori
} from 'src/app/models/kategori';
import { FirebaseService } from 'src/app/servis/firebase.service';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticikategoriislem',
  templateUrl: './yoneticikategoriislem.component.html',
  styleUrls: ['./yoneticikategoriislem.component.css']
})
export class YoneticikategoriislemComponent implements OnInit {
  hata: boolean = false;
  mesaj: string;
  yeniKategori: Kategori = new Kategori();
  key: string;
  constructor(private servis: FirebaseService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.key = this.activeRoute.snapshot.paramMap.get("key")
    if (this.key) {
      this.kategoribykey()
    }
  }

  kategoriEkle() {
    if (this.yeniKategori.key) {
      this.servis.kategoriDuzenle(this.yeniKategori).then((d)=>{
        this.router.navigate(['../yoneticikategori'])
      })
    } else {
      this.servis.kategoriEkle(this.yeniKategori).then((d) => {
        this.router.navigate(['../yoneticikategori'])
      })
    }

  }
  kategoribykey() {
    this.servis.kategoriByKey(this.key).snapshotChanges().subscribe((d) => {
      const y = {...d.payload.toJSON(), key:d.payload.key}
      this.yeniKategori = (y as Kategori);
    })
  }

}
