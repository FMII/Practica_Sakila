export interface Direccion {
    address_id: number;
    address: string;
    address2: string | null;
    district: string;
    city_id: number;
    postal_code: string;
    phone: string;
    last_update: string;
    city: Ciudad;
    customer: any[]; // Si no usas esta relación, puedes omitirla o dejarla como any[]
    staff: any[];
    store: Tienda[];
  }
  
  export interface Ciudad {
    city_id: number;
    city: string;
    country_id: number;
    last_update: string;
  }
  
  export interface Tienda {
    store_id: number;
    manager_staff_id: number;
    address_id: number;
    last_update: string;
  }
  
  export interface DireccionResponse {
    data: Direccion[];
  }
  