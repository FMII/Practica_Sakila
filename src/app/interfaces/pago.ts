export interface Pago {
    payment_id: number;
    customer_id: number;
    staff_id: number;
    rental_id: number;
    amount: string;
    payment_date: string;
    last_update: string;
    customer: Cliente;
    rental: Renta;
  }
  
  export interface Cliente {
    customer_id: number;
    store_id: number;
    first_name: string;
    last_name: string;
    email: string;
    address_id: number;
    active: boolean;
    create_date: string;
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
  
  export interface PagoResponse {
    data: Pago[];
  }
  