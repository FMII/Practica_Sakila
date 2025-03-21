export interface Inventario {
    inventory_id: number;
    film_id: number;
    store_id: number;
    last_update: string;
    film: Pelicula;
    store: Tienda;
    rental: Renta[];
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
  
  export interface Tienda {
    store_id: number;
    manager_staff_id: number;
    address_id: number;
    last_update: string;
  }
  
  export interface Renta {
    rental_id: number;
    rental_date: string;
    inventory_id: number;
    customer_id: number;
    return_date: string;
    staff_id: number;
    last_update: string;
  }
  
  export interface InventarioResponse {
    data: Inventario[];
  }
  