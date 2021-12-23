export interface TeamsInterface {
    tid?: number;
    region?: string;
    name?: string;
    abbrev?: string;
    pop?: number;
    strategy?: string;
    stadiumCapacity?: number;
    colors?: Array<string>;
    imgURL?: string;
    imgURLSmall?: string;
}

export interface PlayerInterface {
    name: string;
    jerseyNumber?: number;
    tid?: number;
    ratings: Array<unknown>;
    pos: string;
    born: object;
    imgURL: string;
    contract?: object;
    transactions?: Array<unknown>;
    draft: PlayerDraft;
    college: string;
    stats: Array<unknown>;
}

export interface PlayerDraft {
    originalTid: number;
    pick: number;
    round: number;
    tid: number;
    year: number;
}
