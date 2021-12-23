export interface TeamsInterface {
    tid: number;
    region: string;
    name: string;
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
    ratings: Array<PlayerRatings>;
    pos: string;
    born: object;
    imgURL: string;
    contract?: object;
    transactions?: Array<unknown>;
    draft: PlayerDraft;
    college: string;
    stats: Array<unknown>;
    hgt: number;
    weight: number;
    awards: Array<PlayerAward>;
}

export interface PlayerDraft {
    originalTid: number;
    pick: number;
    round: number;
    tid: number;
    year: number;
}

export interface PlayerRatings {
    diq: number;
    dnk: number;
    endu: number;
    fg: number;
    ft: number;
    ins: number;
    jmp: number;
    oiq: number;
    reb: number;
    spd: number;
    stre: number;
    tp: number;
}

export interface PlayerAward {
    season: number;
    type: string;
}
