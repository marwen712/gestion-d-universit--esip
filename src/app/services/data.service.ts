import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore,private fs:AngularFirestore) { }

  //add student
  addEtudiant(etudiant:Etudiant){
    etudiant.id=this.afs.createId();
    return this.afs.collection('/Etudiants').add(etudiant);

  }

  //get all students
  getAllEtudiants() {
    return this.afs.collection('/Etudiants').snapshotChanges();
  }

  //delete student
  deleteEtudiant(etudiant:Etudiant) {
    return this.afs.doc('/Etudiants/'+etudiant.id).delete();
  }

  // update student
   updateEtudiants(etudiant:Etudiant){
    this.deleteEtudiant(etudiant);
    this.addEtudiant(etudiant);
   }
}
