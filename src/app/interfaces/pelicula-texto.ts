export interface PeliculaTexto {
    film_id: number;
    title: string;
    description: string;
  }
  
  export interface PeliculaTextoResponse {
    data: PeliculaTexto[];
  }
  