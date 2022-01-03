import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FirebaseKullanici
} from 'src/app/models/Kullanici';
import { FirebaseService } from 'src/app/servis/firebase.service';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-uyeol',
  templateUrl: './uyeol.component.html',
  styleUrls: ['./uyeol.component.css']
})
export class UyeolComponent implements OnInit {

  yeniKullanici: FirebaseKullanici = new FirebaseKullanici();
  constructor(private servis: FirebaseService, private router: Router) {}

  ngOnInit(): void {}

  UyeOl() {
    this.servis.uyeOl(this.yeniKullanici).then((res)=>{
      console.log(res.user.uid);
      this.yeniKullanici.uid = res.user.uid
      this.servis.uyeEkle(this.yeniKullanici).then(()=>{
        this.router.navigate(['girisyap'])
      }).catch(err=>console.log(err))
    }).catch(err=>console.log(err));

  }

}
