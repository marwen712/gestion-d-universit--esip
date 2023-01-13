
import { Component, OnInit } from '@angular/core';
import { Materiel } from '../model/materiel';
import { AuthService } from '../services/auth.service';
import { MaterielService } from '../services/materiel.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Enseignant } from '../model/enseignant';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit{
  successUpdate :string | undefined;
  materielList: Materiel[] =[];
  materielObj : Materiel = {
    id: '',
    name: '',
    nombre: '',
    
  };
  id:string='';
  name:string='';
  nombre:string='';
 
  
  constructor(private auth:AuthService,private materielService: MaterielService){

  }
  ngOnInit(): void {
   this.getAllMateriels();
  }
  getAllMateriels(){
    this.materielService.getAllMateriels().subscribe(res =>{
      this.materielList = res.map((e:any )=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    },err =>{
      alert('Error while fetching the materielService');
    })
  }
  resetForm(){
    this.id='';
  this.name='';
  this.nombre='';
  
  }
  addMateriel(){
if (this.name==''||this.nombre =='' ){
  alert('Remplacer tous les champs !!')
}
this.materielObj.id = this.id;
this.materielObj.name=this.name;
this.materielObj.nombre=this.nombre;
this.materielService.addMateriel(this.materielObj);
this.resetForm();
  }
  updateMateriel() {
  }
  deleteMateriel(materiel:Materiel){
    if(window.confirm('vous etes sure de supprimer'+materiel.name+' '+materiel.nombre+' ?')){
this.materielService.deleteMateriel(materiel);
    }
  }

}

