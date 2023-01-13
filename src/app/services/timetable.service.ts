import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timetable } from '../model/timetable';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

 
  constructor(private firestore: AngularFirestore) { }

  getTimetables() {
    return this.firestore.collection('timetables').snapshotChanges();
  }

  createTimetable(timetable: Timetable) {
    return this.firestore.collection('timetables').add(timetable);
  }

  updateTimetable(timetable: Timetable) {
    this.firestore.doc('timetables/' + timetable.id).update(timetable);
  }

  deleteTimetable(timetableId: string) {
    this.firestore.doc('timetables/' + timetableId).delete();
  }
}
