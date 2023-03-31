type APIError = {
    status: number;
    message:"NOT FOUND" | "BAD REQUEST" | "BAD GATEWAY";
}


export type { APIError }