export interface PeliculaActor {
    actor_id: number;
    film_id: number;
    last_update: string;
    actor: Actor;
    film: Film;
  }
  
  export interface Actor {
    actor_id: number;
    first_name: string;
    last_name: string;
    last_update: string;
  }
  
  export interface Film {
    film_id: number;
    title: string;
    description: string;
    release_year: number;
    rating: string;
    last_update: string;
  }
  
  export interface PeliculaActorResponse {
    data: PeliculaActor[];
  }
  