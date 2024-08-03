import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getCourses() {
    return [
      {
        id: '001',
        name: "Java",
        price: 90000
      },
      {
        id: '002',
        name: "HTML",
        price: 10000
      },
      {
        id: '003',
        name: "CSS",
        price: 70000
      },
      {
        id: '004',
        name: "JavaScript",
        price: 30000
      },
      {
        id: '005',
        name: "Spring",
        price: 20000
      },
      {
        id: '006',
        name: "SQL",
        price: 20000
      },
      {
        id: '007',
        name: "Git/GitHub",
        price: 5000
      },
      {
        id: '008',
        name: "Angular",
        price: 2500
      },
      {
        id: '009',
        name: "ReactJS",
        price: 20000
      },
      {
        id: '010',
        name: "NextJS",
        price: 11500
      },
    ]
  }

}
