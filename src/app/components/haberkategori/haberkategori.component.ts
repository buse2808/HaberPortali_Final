import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Haber } from 'src/app/models/haber';
import { FirebaseService } from 'src/app/servis/firebase.service';
import { ServisService } from 'src/app/servis/servis.service';

@Component({
  selector: 'app-haberkategori',
  templateUrl: './haberkategori.component.html',
  styleUrls: ['./haberkategori.component.css']
})
export class HaberkategoriComponent implements OnInit {
  haberler: Haber[];

  constructor(private servis: FirebaseService, 
    private router: Router,
    private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(p=>{
      this.servis.haberByKategori(p.kategori).snapshotChanges().pipe(
        map(changes=>
          changes.map(c=>
            ({key:c.payload.key, ...c.payload.toJSON()})
            ))
            )
        .subscribe((d:Haber[]) => {
       this.haberler =d;
      })
    })
  }

  haberDetay(id) {
    this.router.navigate(['d', id])
  }

}
