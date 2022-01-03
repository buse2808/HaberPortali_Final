import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import { map } from 'rxjs/operators';
import {
  Haber
} from 'src/app/models/haber';
import { FirebaseService } from 'src/app/servis/firebase.service';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  haberDetay(id) {
    this.router.navigate(['d', id])
  }
}
