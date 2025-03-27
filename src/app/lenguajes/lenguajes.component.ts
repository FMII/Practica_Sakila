import { Component, OnInit } from '@angular/core';
import { Lenguaje } from '../interfaces/lenguaje';
import { LenguajeService } from '../services/lenguaje/lenguaje.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-lenguajes',
  standalone: true,
  imports: [NgIf, NgFor, NgxPaginationModule, CommonModule],
  templateUrl: './lenguajes.component.html',
  styleUrl: './lenguajes.component.css'
})
export class LenguajesComponent implements OnInit {
  lenguajes: Lenguaje[] = [];
  itemsPerPage: number = 10;
  page: number = 1;
  formVisible: boolean = false;

  constructor(private lenguajeService: LenguajeService) { }

  ngOnInit(): void {
    this.cargarLenguajes();
  }

  cargarLenguajes(): void {
    this.lenguajeService.getLanguages().subscribe({
      next: (response) => this.lenguajes = response.data,
      error: (error) => console.error('Error al obtener los lenguajes:', error)
    });
  }
}
