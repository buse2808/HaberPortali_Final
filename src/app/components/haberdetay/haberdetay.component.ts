import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Haber } from 'src/app/models/haber';
import { FirebaseService } from 'src/app/servis/firebase.service';
import { ServisService } from 'src/app/servis/servis.service';

@Component({
  selector: 'app-haberdetay',
  templateUrl: './haberdetay.component.html',
  styleUrls: ['./haberdetay.component.css']
})
export class HaberdetayComponent implements OnInit {

  haber:Haber;

  constructor(private servis:FirebaseService, private activeRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(p=>{
      this.servis.haberByKey(p.id).snapshotChanges().subscribe((d) => {
        const y = {...d.payload.toJSON(), key:d.payload.key}
        this.haber = (y as Haber);
      })
    })
  }

haberbykey(key){
}

}
