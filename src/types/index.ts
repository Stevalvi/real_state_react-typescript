
export type Properties = {
    id: number,
    tittle: string,
    description: string,
    price: number,
    type: string,
    location: string,
    rooms: number,
    bathrooms: number,
    stratum: number,
    area: number,
    parking: boolean,
    antique: string,
    images: string[],
}
export type Articles = {
    id: number,
    tittle: string,
    description: string,
    date: string,
    by: string,
    images: string[],
}