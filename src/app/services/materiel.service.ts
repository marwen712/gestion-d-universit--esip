import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Materiel } from '../model/materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  constructor(private afs : AngularFirestore) { }

  //add materiel
  addMateriel(materiel:Materiel){
    materiel.id=this.afs.createId();
    return this.afs.collection('/Materiels').add(materiel);

  }

  //get all materiels
  getAllMateriels() {
    return this.afs.collection('/Materiels').snapshotChanges();
  }

  //delete student
  deleteMateriel(materiel:Materiel) {
    return this.afs.doc('/Materiels/'+materiel.id).delete();
  }

  // update student
   updateMateriel(materiel:Materiel){
    this.deleteMateriel(materiel);
    this.addMateriel(materiel);
   }
}
