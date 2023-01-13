import { Component, OnInit } from '@angular/core';
import { Materiel } from '../model/materiel';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MaterielService } from '../services/materiel.service';

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddmaterielComponent implements OnInit {
  successUpdate :string | undefined;
  materielList: Materiel[] =[];
  materielObj : Materiel = {
    id: '',
   name: '',
    nombre:''
  };
  id:string='';
 name:string='';
  nombre:string='';
  
  constructor(private auth:AuthService,private materielService: MaterielService,private fs:AngularFirestore){

  }
  ngOnInit(): void {
 
  }
 
  resetForm(){
    this.id='';
  this.name='';
  this.nombre='';
  }
  addMateriel(){
if (this.name==''||this.nombre ==''){
  alert('Remplacer tous les champs !!')
}
this.materielObj.id = this.id;
this.materielObj.name=this.name;
this.materielObj.nombre=this.nombre;

this.materielService.addMateriel(this.materielObj);
this.resetForm();
  }
  

}
