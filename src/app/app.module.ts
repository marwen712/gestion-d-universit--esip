import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';

import { environment } from 'src/environments/environment';
import { HeaderComponent } from './header/header.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { MaterielComponent } from './materiel/materiel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { EmploiComponent } from './emploi/emploi.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { EditEnseignantComponent } from './edit-enseignant/edit-enseignant.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AddmaterielComponent } from './add-materiel/add-materiel.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EtudiantComponent,
    EnseignantComponent,
    MaterielComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EmploiComponent,
    AddEtudiantComponent,
    AddEnseignantComponent,
    EditEnseignantComponent,
    AddmaterielComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
