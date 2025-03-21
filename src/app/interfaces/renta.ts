export interface Renta {
    rental_id: number;
    rental_date: string;
    inventory_id: number;
    customer_id: number;
    return_date: string;
    staff_id: number;
    last_update: string;
    payment: Pago[];
    inventory: Inventario;
  }
  
  export interface Pago {
    payment_id: number;
    customer_id: number;
    staff_id: number;
    rental_id: number;
    amount: string;
    payment_date: string;
    last_update: string;
  }
  
  export interface Inventario {
    inventory_id: number;
    film_id: number;
    store_id: number;
    last_update: string;
  }
  
  export interface RentaResponse {
    data: Renta[];
  }
  