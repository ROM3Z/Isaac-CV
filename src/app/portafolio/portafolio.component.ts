import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CvabastidasService } from '../services/cvabastidas.service';
import { Staff } from 'src/app/model/profesorReport';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})

export class PortafolioComponent implements OnInit {
  myImgUrl: string = './assets/images/awards/hogwarts.png';
  ELEMENT_DATA: Staff[];
  displayedColumns: string[] = ['name', 'house', 'dateOfBirth', 'patronus','image'];
  dataSource = new MatTableDataSource<Staff>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor( private service:CvabastidasService ) 
  { }

  
  ngOnInit(): void {
    this.TodosEstudiantes();
    this.dataSource.sort = this.sort;
  }

  public TodosEstudiantes(){
    let resp = this.service.CargarProfesores();
      resp.subscribe(report => this.dataSource.data= report as Staff[] );

  }

}
const ELEMENT_DATA: Staff[]=[];