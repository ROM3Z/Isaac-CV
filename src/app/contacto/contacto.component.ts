import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { House } from 'src/app/model/houseReport';
import { CvabastidasService } from '../services/cvabastidas.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
  myImgUrl: string = './assets/images/awards/hogwarts.png';
  selectedValue: string;

  houses = [
    { value: 'Gryffindor', viewValue: 'Gryffindor' },
    { value: 'Slytherin', viewValue: 'Slytherin' },
    { value: 'Ravenclaw', viewValue: 'Ravenclaw' },
    { value: 'Hufflepuff', viewValue: 'Hufflepuff' },
  ];
  public estudiantes: any = []
  displayedColumns: string[] = ['name', 'house', 'dateOfBirth', 'patronus','image'];
  dataSource = new MatTableDataSource<House>(this.estudiantes);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngAfterViewInit() {
    
  }

  change(event) {
    if (event.isUserInput) {
      console.log(event.source.value, event.source.selected);
      this.service.getEstudiantes(event.source.value)
        .subscribe(resp => {
          console.log(resp);
          this.estudiantes = resp
          this.dataSource = new MatTableDataSource<House>(this.estudiantes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.estudiantes.filter = filterValue.trim().toLowerCase();


    if (this.estudiantes.paginator) {
      this.estudiantes.paginator.firstPage();
    }
  }
  constructor(private service: CvabastidasService) { }

  ngOnInit(): void {

  }



}