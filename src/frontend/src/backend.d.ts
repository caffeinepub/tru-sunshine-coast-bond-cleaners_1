import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ContactSubmission {
    id: bigint;
    serviceType: ServiceType;
    name: string;
    email: string;
    message: string;
    address: string;
    timestamp: Time;
    phone: string;
}
export enum ServiceType {
    bondCleaning = "bondCleaning",
    windowCleaning = "windowCleaning",
    pestControl = "pestControl",
    carpetCleaning = "carpetCleaning"
}
export interface backendInterface {
    getAllSubmissions(adminPrincipal: Principal): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, phone: string, email: string, address: string, serviceType: ServiceType, message: string): Promise<void>;
}
