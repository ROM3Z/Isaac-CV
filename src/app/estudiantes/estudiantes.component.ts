import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CvabastidasService } from '../services/cvabastidas.service';
import { EstudiantesReport } from 'src/app/model/estudianteReport';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent implements OnInit {
  
  ELEMENT_DATA: EstudiantesReport[];
  displayedColumns: string[] = ['name', 'house', 'dateOfBirth', 'patronus'];
  dataSource = new MatTableDataSource<EstudiantesReport>(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private service:CvabastidasService
  ) { }

  ngOnInit(): void {
    this.TodosEstudiantes();
  }

  public TodosEstudiantes(){
    let resp = this.service.CargarEstudiantes();
      resp.subscribe(report => this.dataSource.data= report as EstudiantesReport[] );

  }

}

const ELEMENT_DATA: EstudiantesReport[]=[];