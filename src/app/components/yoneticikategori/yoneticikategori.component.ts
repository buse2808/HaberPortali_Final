import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Kategori
} from 'src/app/models/kategori';
import { FirebaseService } from 'src/app/servis/firebase.service';
import {
  ServisService
} from 'src/app/servis/servis.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-yoneticikategori',
  templateUrl: './yoneticikategori.component.html',
  styleUrls: ['./yoneticikategori.component.css']
})
export class YoneticikategoriComponent implements OnInit {

  kategoriler: Kategori[];
  className: string;

  constructor(private servis: FirebaseService, private router: Router) {}

  ngOnInit(): void {
    this.kategoriliste();
    console.log(this.kategoriler)
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
  kategoriduzenle(k: Kategori) {
    this.router.navigate(['../yoneticikategoriislemleri',  k.key])
  }
  kategorisil(id: string) {
    this.servis.kategoriSil(id).then(d => {
      this.kategoriliste();
    })
  }
}
