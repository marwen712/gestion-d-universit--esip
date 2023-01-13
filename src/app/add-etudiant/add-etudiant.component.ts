import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  successUpdate :string | undefined;
  etudiantList: Etudiant[] =[];
  etudiantObj : Etudiant = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    address: '',
    classe: ''
  };
  id:string='';
  first_name:string='';
  last_name:string='';
  email:string='';
  mobile:string='';
  address:string='';
  classe:string='';
  
  constructor(private auth:AuthService,private data: DataService,private fs:AngularFirestore){

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
  this.classe='';
  }
  addEtudiant(){
if (this.first_name==''||this.last_name =='' || this.mobile =='' || this.email =='' ||
this.address ==''||this.classe==''){
  alert('Remplacer tous les champs !!')
}
this.etudiantObj.id = this.id;
this.etudiantObj.first_name=this.first_name;
this.etudiantObj.last_name=this.last_name;
this.etudiantObj.email=this.email;
this.etudiantObj.classe=this.classe;
this.etudiantObj.mobile=this.mobile;
this.etudiantObj.address=this.address;
this.data.addEtudiant(this.etudiantObj);
this.resetForm();
  }
  

}
