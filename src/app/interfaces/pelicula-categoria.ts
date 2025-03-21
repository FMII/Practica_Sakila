export interface PeliculaCategoria {
    film_id: number;
    category_id: number;
    last_update: string;
    category: Categoria;
    film: Pelicula;
  }
  
  export interface Categoria {
    category_id: number;
    name: string;
    last_update: string;
  }
  
  export interface Pelicula {
    film_id: number;
    title: string;
    description: string;
    release_year: number;
    language_id: number;
    original_language_id: number | null;
    rental_duration: number;
    rental_rate: string;
    length: number;
    replacement_cost: string;
    rating: string;
    special_features: string;
    last_update: string;
  }
  
  export interface PeliculaCategoriaResponse {
    data: PeliculaCategoria[];
  }
  