import { Component, OnInit } from '@angular/core';
import { Tienda } from '../interfaces/tienda';
import { TiendaService } from '../services/tienda/tienda.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-tiendas',
  standalone: true,
  imports: [NgxPaginationModule, NgFor, CommonModule],
  templateUrl: './tiendas.component.html',
  styleUrl: './tiendas.component.css'
})
export class TiendasComponent implements OnInit {
  tiendas: Tienda[] = [];
  itemsPerPage: number = 10;
  page: number = 1;
  formVisible: boolean = false;

  constructor(private tiendaService: TiendaService) {}

  ngOnInit(): void {
    this.cargarTiendas();
  }

  cargarTiendas(): void {
    this.tiendaService.getTiendas().subscribe({
      next: (response) => this.tiendas = response.data, // Asumiendo que 'data' es la respuesta correcta
      error: (error) => console.error('Error al obtener las tiendas:', error)
    });
  }
}
