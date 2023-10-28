import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  utilisateur: Observable<any>;

  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router,
    ) {
    this.utilisateur = this.authService.utilisateur;
    
  }

  ngOnInit() {
    this.utilisateur.subscribe((user) => {
      if (user) {
        this.authService.getInformationsUtilisateur(user.uid).then((profil) => {
          console.log(profil);
        });
      }
    });
  }

  async deconnecterUtilisateur() {
    try {
      await this.authService.deconnecterUtilisateur();
      const toast = await this.toastController.create({
        message: 'Vous avez été déconnecté.',
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();
      this.router.navigate(['/connexion']);
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
      const toast = await this.toastController.create({
        message: 'Erreur lors de la déconnexion.',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    }
  }
}
