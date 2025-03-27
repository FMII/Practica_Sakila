import { Component, OnInit } from '@angular/core';
import { Direccion } from '../interfaces/direccion';
import { DireccionService } from '../services/direccion/direccion.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-direcciones',
  standalone: true,
  imports: [NgxPaginationModule,NgFor, CommonModule],
  templateUrl: './direcciones.component.html',
  styleUrl: './direcciones.component.css'
})
export class DireccionesComponent implements OnInit {
  direcciones: Direccion[] = [];
  itemsPerPage: number = 10;
  page: number = 1;
  formVisible: boolean = false;

  constructor(private direccionService: DireccionService) {}

  ngOnInit(): void {
    this.cargarDirecciones();
  }

  cargarDirecciones(): void {
    this.direccionService.getDirecciones().subscribe({
      next: (response) => this.direcciones = response.data, // Asumiendo que 'data' es la respuesta correcta
      error: (error) => console.error('Error al obtener las direcciones:', error)
    });
  }
}
