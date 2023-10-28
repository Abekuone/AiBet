import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage {
  inscriptionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async submitForm() {
    if (this.inscriptionForm.valid) {
      const userData = this.inscriptionForm.value;

      try {
        const userCredential = await this.authService.inscrireUtilisateur(userData);

        if (userCredential) {
          const toast = await this.toastController.create({
            message: 'Inscription réussie !',
            duration: 5000,
            position: 'top',
            color: 'success',
          });
          toast.present();
          this.router.navigate(['/connexion']);
        } else {
        }
      } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
      }
    }
  }
}