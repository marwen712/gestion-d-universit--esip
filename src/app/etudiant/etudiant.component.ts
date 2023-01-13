import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Enseignant } from '../model/enseignant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
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
  
  constructor(private auth:AuthService,private data: DataService){

  }
  ngOnInit(): void {
   this.getAllEtudiants();
  }
  getAllEtudiants(){
    this.data.getAllEtudiants().subscribe(res =>{
      this.etudiantList = res.map((e:any )=>{
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
  updateEtudiant() {
  }
  deleteEtudiant(etudiant:Etudiant){
    if(window.confirm('vous etes sure de supprimer'+etudiant.first_name+' '+etudiant.last_name+' ?')){
this.data.deleteEtudiant(etudiant);
    }
  }

}

