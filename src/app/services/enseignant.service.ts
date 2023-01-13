import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Enseignant } from '../model/enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  constructor(private afs : AngularFirestore) { }

  //add enseignant
  addEnseignant(enseignant:Enseignant){
    enseignant.id=this.afs.createId();
    return this.afs.collection('/Enseignants').add(enseignant);

  }

  //get all Enseignants
  getAllEtudiants() {
    return this.afs.collection('/Enseignants').snapshotChanges();
  }

  //delete student
  deleteEnseignant(enseignant:Enseignant) {
    return this.afs.doc('/Enseignants/'+enseignant.id).delete();
  }

  // update student
   updateEtudiants(enseignant:Enseignant){
    this.deleteEnseignant(enseignant);
    this.addEnseignant(enseignant);
   }
}
