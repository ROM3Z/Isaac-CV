import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CvabastidasService } from '../services/cvabastidas.service';
import { EstudiantesReport } from 'src/app/model/estudianteReport';
import { EstudiantesComponent } from '../estudiantes/estudiantes.component';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  myImgUrl: string = './assets/images/awards/hogwarts.png';
  ELEMENT_DATA: EstudiantesReport[];
  displayedColumns: string[] = ['name', 'house', 'dateOfBirth', 'patronus','image', 'actions'];
  dataSource = new MatTableDataSource<EstudiantesReport>(ELEMENT_DATA);
 
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

  constructor(
    private service:CvabastidasService
  ) { }

  ngOnInit(): void {
    this.TodosEstudiantes();
    this.dataSource.sort = this.sort;
  }

  public TodosEstudiantes(){
    let resp = this.service.CargarEstudiantes();
      resp.subscribe(report => this.dataSource.data= report as EstudiantesReport[] );

  }
  getEstu(){

  }
  eliminarEstu(index: number){

   const data = this.dataSource.data;
   data.splice(index,1);
   this.dataSource.data = data;

  }
  agregarEstu( usuario:EstudiantesReport){
    this.dataSource.data.unshift();
  }
 
}

const ELEMENT_DATA: EstudiantesReport[]=[];
