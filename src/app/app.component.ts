import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {
  Kategori
} from './models/kategori';
import { FirebaseService } from './servis/firebase.service';
import {
  ServisService
} from './servis/servis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'busenurHaberportali';

  kategoriler: Kategori[];

  constructor(public servis: FirebaseService,public router:Router) {}

  ngOnInit() {
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
  CikisYap(){
    localStorage.clear();
    this.router.navigate(['girisyap']);
  }
}
