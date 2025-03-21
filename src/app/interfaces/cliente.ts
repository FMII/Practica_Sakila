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
  
  export interface ClienteResponse {
    data: Cliente[];
  }
  