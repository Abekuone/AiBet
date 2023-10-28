import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { getDatabase, ref, DataSnapshot } from 'firebase/database';
import { get } from 'firebase/database';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  utilisateur: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private router: Router,
    ) {
      this.utilisateur = this.afAuth.authState;
    
  }

  async inscrireUtilisateur(userData: any): Promise<firebase.default.auth.UserCredential | null> {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        userData.email,
        userData.motDePasse
      );
      
      const user = userCredential.user;
      await user!.updateProfile({
        displayName: userData.nom + ' ' + userData.prenom,
      });
  
      return userCredential;
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      return null;
    }
  }

  async connecterUtilisateur(email: string, motDePasse: string): Promise<boolean> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, motDePasse);
      return true;
    } catch (error) {
      this.afficherErreur('Échec de la connexion. Veuillez vérifier vos informations d\'identification.');
      return false;
    }
  }

  async deconnecterUtilisateur(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      this.afficherErreur('Erreur lors de la déconnexion.');
    }
  }

  private async afficherErreur(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  async getInformationsUtilisateur(uid: string): Promise<any> {
    const db = getDatabase();
    const userRef = ref(db, `/utilisateurs/${uid}`);
    const userSnapshot = await get(userRef);
    return userSnapshot.val();
  }


  
}