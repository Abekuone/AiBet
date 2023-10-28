import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserModel[] = [];
  getCurrentUser: any;

  constructor(
    private afAuth: AngularFireAuth
  ) {}

  createUser(user: UserModel): void {
    // Logique pour créer un nouvel utilisateur
    this.users.push(user);
  }

  getUserById(userId: string): UserModel | undefined {
    return this.users.find((user) => user.id === userId);
  }

  updateUser(currentUser: UserModel) {
    throw new Error('Method not implemented.');
  }

}
