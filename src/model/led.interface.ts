export interface Led{
    title: string;
    gpio: number;
    value: number;
    type?: number;
    color?:string;
    icon?:string;
}