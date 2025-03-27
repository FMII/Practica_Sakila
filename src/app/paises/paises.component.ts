import { Component, OnInit } from '@angular/core';
import { Pais } from '../interfaces/pais';
import { PaisService } from '../services/pais/pais.service';
import { CommonModule, NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [NgFor, NgxPaginationModule, CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent implements OnInit {
  paises: Pais[] = [];
  itemsPerPage: number = 10;
  page: number = 1;
  formVisible: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.paisService.getPaises().subscribe({
      next: (response) => this.paises = response.data, // Asumiendo que 'data' es la respuesta correcta
      error: (error) => console.error('Error al obtener los países:', error)
    });
  }
}
