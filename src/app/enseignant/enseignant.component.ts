import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EnseignantService } from '../services/enseignant.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Enseignant } from '../model/enseignant';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  successUpdate :string | undefined;
  enseignantList: Enseignant[] =[];
  enseignantObj : Enseignant = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    address: '',
    matiere: ''
  };
  id:string='';
  firstname:string='';
  lastname:string='';
  email:string='';
  mobile:string='';
  address:string='';
  matiere:string='';
  
  constructor(private auth:AuthService,private enseignantService: EnseignantService){

  }
  ngOnInit(): void {
    this.getAllEtudiants();
  }
  getAllEtudiants(){
    this.enseignantService.getAllEtudiants().subscribe(res =>{
      this.enseignantList = res.map((e:any )=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    },err =>{
      alert('Error while fetching the data');
    })
  }
  resetForm(){
    this.id='';
  this.firstname='';
  this.lastname='';
  this.email='';
  this.mobile='';
  this.address='';
  this.matiere='';
  }
  addenseignant(){
if (this.firstname==''||this.lastname =='' || this.mobile =='' || this.email =='' ||
this.address ==''||this.matiere==''){
  alert('Remplacer tous les champs !!')
}
this.enseignantObj.id = this.id;
this.enseignantObj.firstname=this.firstname;
this.enseignantObj.lastname=this.lastname;
this.enseignantObj.email=this.email;
this.enseignantObj.matiere=this.matiere;
this.enseignantObj.mobile=this.mobile;
this.enseignantObj.address=this.address;
this.enseignantService.addEnseignant(this.enseignantObj);
this.resetForm();
  }
  updateEnseignant() {
  }
  deleteEnseignant(enseignant:Enseignant){
    if(window.confirm('vous etes sure de supprimer'+enseignant.firstname+' '+enseignant.lastname+' ?')){
this.enseignantService.deleteEnseignant(enseignant);
    }
  }

}



