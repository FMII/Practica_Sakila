export interface ActorResponse {
  data: Actor[];
}

export interface Actor {
  actor_id: number;
  first_name: string;
  last_name: string;
  last_update: string;
  film_actor: FilmActor[];
}

export interface FilmActor {
  actor_id: number;
  film_id: number;
  last_update: string;
}
