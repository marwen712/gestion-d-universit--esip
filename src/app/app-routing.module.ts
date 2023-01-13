import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterielComponent } from './materiel/materiel.component';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EmploiComponent } from './emploi/emploi.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { EditEnseignantComponent } from './edit-enseignant/edit-enseignant.component';
import { AddmaterielComponent } from './add-materiel/add-materiel.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent, canActivate: [AuthGuardService]},
  {path:'materiel',component:MaterielComponent, canActivate: [AuthGuardService]},
  {path:'home',component:HomeComponent, canActivate: [AuthGuardService]},
  {path:'etudiant',component:EtudiantComponent, canActivate: [AuthGuardService]},
  {path:'enseignant',component:EnseignantComponent, canActivate: [AuthGuardService]},
  {path:'emploi',component:EmploiComponent, canActivate: [AuthGuardService]},
  {path:'addEtudiant',component:AddEtudiantComponent, canActivate: [AuthGuardService]},
  {path:'add-enseignant',component:AddEnseignantComponent, canActivate: [AuthGuardService]},
  {path:'add-materiel',component:AddmaterielComponent, canActivate: [AuthGuardService]},
  {path:'edit-enseignant/:id',component:EditEnseignantComponent, canActivate: [AuthGuardService]},
  {path:'**',redirectTo:'login'},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
