import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

//@Component faz o angular reconhecer como uma classe elegível para componente.
@Component ({
    selector : 'app-course-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
//OnInit --> ngOnInit: método de ciclo de vida do Angular
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/loc.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate:'December, 2, 2021'
            }, {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/logo.png',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate:'September, 20, 2022'
            } , {
                id: 3,
                name: 'Angular: Protocol',
                imageUrl: '/assets/images/trademark.png',
                price: 75.99,
                code: 'LKL-1094',
                duration: 60,
                rating: 3.5,
                releaseDate:'November, 10, 2021'
            }
        ]
    }
}