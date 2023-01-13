import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {
  successUpdate :string | undefined;
  enseignantList: Enseignant[] =[];
  enseignantObj : Enseignant = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    address: '',
    matiere:''
  };
  id:string='';
  first_name:string='';
  last_name:string='';
  email:string='';
  mobile:string='';
  address:string='';
  matiere:string='';
  
  constructor(private auth:AuthService,private enseignantService: EnseignantService,private fs:AngularFirestore){

  }
  ngOnInit(): void {
 
  }
 
  resetForm(){
    this.id='';
  this.first_name='';
  this.last_name='';
  this.email='';
  this.mobile='';
  this.address='';
  this.matiere='';
  }
  addEnseignant(){
if (this.first_name==''||this.last_name =='' || this.mobile =='' || this.email =='' ||
this.address ==''||this.matiere==''){
  alert('Remplacer tous les champs !!')
}
this.enseignantObj.id = this.id;
this.enseignantObj.firstname=this.first_name;
this.enseignantObj.lastname=this.last_name;
this.enseignantObj.email=this.email;
this.enseignantObj.matiere=this.matiere;
this.enseignantObj.mobile=this.mobile;
this.enseignantObj.address=this.address;
this.enseignantService.addEnseignant(this.enseignantObj);
this.resetForm();
  }
  

}