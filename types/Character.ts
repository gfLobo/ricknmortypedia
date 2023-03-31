type Character = {
    id: number;
    name: string;
    status: "Dead" | "Alive" | "unknown"
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    origin: { name: string, url: string };
    location: { name: string, url: string };
    image: string;
    episode: string[];
    url: string;
    created: string;
    liked:boolean | undefined;
}

export type { Character }