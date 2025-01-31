type Coords = {
    lon: number;
    lat:number
}

export type Weather = {
    id:number,
    main:string,
    description: string,
    icon:string
}

export type Main = {
    temp:number,
    temp_kf?:number,
    feels_like:number,
    temp_min:number,
    temp_max:number,
    pressure:number,
    humidity:number,
    sea_level:number,
    grnd_level:number,
}

export type Wind={
    speed:number,
    deg:number,
    gust:number
}

export type Clouds= {
    all:number
}

export type Rain_Snow = {
    "1h"?: number,
    "3h"?:number
}

type SysData = {
    type:number,
    sunset:number,
    sunrise:number,
    id:number,
    country:string,
    message?:string
}


export interface CurrentWeatherDataApiResponse{
    coord: Coords,
    weather: Weather[],
    base: string,
    main: Main,
    visibility: number,
    wind: Wind,
    clouds: Clouds,
    rain?: Rain_Snow,
    snow?: Rain_Snow,
    dt: number,
    sys: SysData,
    timezone: number,
    id:number,
    name:string,
    cod:number
}