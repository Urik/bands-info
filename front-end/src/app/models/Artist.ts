import { Observable } from "rxjs";

export interface RawImage {
    '#text'?: string,
    size?: string
}

export interface Image {
    url: string
}

export interface Bio {
    content?: string,
    summary?: string
}

export class Artist {
    constructor(public name: string, public url: string, public similarArtists: Artist[], public image?: Image, public bio?: Bio, public observableBio?: Observable<Bio>) {}
}