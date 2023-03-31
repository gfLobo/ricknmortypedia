type Filter = {
    name: string | string[] | undefined;
    status: "Dead" | "Alive" | "unknown" | string | string[] | undefined;
    species: string | string[] | undefined;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown' | string | string[] | undefined;
}

export type { Filter }