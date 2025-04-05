export interface Personal {
    staff_id: number;
    first_name: string;
    last_name: string;
    address_id: number;
    picture: { [key: string]: number }; // objeto tipo diccionario
    email: string;
    store_id: number;
    active: boolean;
    username: string;
    password: string;
    last_update: string;
    roleId:number;
    address: Direccion;
    store_staff_store_idTostore: Tienda;
    store_store_manager_staff_idTostaff: Tienda;
  }
  
  export interface Direccion {
    address_id: number;
    address: string;
    address2: string | null;
    district: string;
    city_id: number;
    postal_code: string;
    phone: string;
    last_update: string;
  }
  
  export interface Tienda {
    store_id: number;
    manager_staff_id: number;
    address_id: number;
    last_update: string;
  }
  
  export interface PersonalResponse {
    data: Personal[];
  }
  