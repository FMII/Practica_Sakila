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
  language_film_language_idTolanguage: Idioma;
  language_film_original_language_idTolanguage: Idioma | null;
  film_actor: PeliculaActor[];
  film_category: PeliculaCategoria[];
  inventory: Inventario[];
}

export interface createPelicula {
  title: string,
  language_id: number,
  rental_duration: number,
  rental_rate: string,
  replacement_cost: string,
  special_features: string
}

export interface Idioma {
  language_id: number;
  name: string;
  last_update: string;
}

export interface PeliculaActor {
  actor_id: number;
  film_id: number;
  last_update: string;
}

export interface PeliculaCategoria {
  film_id: number;
  category_id: number;
  last_update: string;
}

export interface Inventario {
  inventory_id: number;
  film_id: number;
  store_id: number;
  last_update: string;
}

export interface PeliculaResponse {
  data: Pelicula[];
}
