
export type ApiResponse<T> = {
    data: T,
    errors: Error[],
    hasErrors: boolean,
};

export type Error = {
    property: string,
    message: string,
};

export type AnyObject = {
    [index: string]: any
};

export  ListingDto  = {
    firstName: string,
    lastName: string,
    socialSecurityNumber: string,
    dateOfBirth: string,
    dateOfEmployment: string,
    licenseNumber: string,
    licenseExpiration: string,
    medicalExpiration: string,
    truckId?: number,
};