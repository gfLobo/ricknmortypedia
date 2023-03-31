import { Character } from "./Character";

type APIResult = {
    info:{
        count:number;
        pages:number;
        next:string | null;
        prev:string |null;
    };
    results:Character[];
}

export type { APIResult }