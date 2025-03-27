import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../services/ciudad/ciudad.service';
import { Ciudad } from '../interfaces/ciudad';
import { CommonModule, NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-ciudades',
  standalone: true,
  imports: [NgIf, NgxPaginationModule, CommonModule],
  templateUrl: './ciudades.component.html',
  styleUrl: './ciudades.component.css'
})
export class CiudadesComponent implements OnInit {
  ciudades: Ciudad[] = [];
  itemsPerPage: number = 10;
  page: number = 1;
  formVisible: boolean = false;

  constructor(private ciudadService: CiudadService) {}

  ngOnInit(): void {
    this.cargarCiudades();
  }

  cargarCiudades(): void {
    this.ciudadService.getCiudades().subscribe({
      next: (response) => this.ciudades = response.data, // Asumiendo que 'data' es la respuesta correcta
      error: (error) => console.error('Error al obtener las ciudades:', error)
    });
  }
}
