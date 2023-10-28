import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  connexionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) {
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required],
    });
  }

  async submitForm() {
    if (this.connexionForm.valid) {
      const { email, motDePasse } = this.connexionForm.value;
      const isConnected = await this.authService.connecterUtilisateur(email, motDePasse);

      if (isConnected) {
        // Rediriger vers la page de profil
        this.router.navigate(['/profil']);
      } else {
        // Afficher un message d'échec sous forme de toast
        const toast = await this.toastController.create({
          message: 'Échec de la connexion. Veuillez vérifier vos informations d\'identification.',
          duration: 2000,
          position: 'top',
          color: 'danger'
        });
        toast.present();
      }
    } else {
      // Afficher un message d'erreur si le formulaire est invalide
      const toast = await this.toastController.create({
        message: 'Veuillez remplir correctement le formulaire.',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    }
  }
}
