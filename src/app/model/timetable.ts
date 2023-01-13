export interface Timetable {
    id: string;
    periods: [
      {
        monday: string,
        tuesday: string,
        wednesday: string,
        thursday: string,
        friday: string
      }
    ];
    courseName: string;
}
