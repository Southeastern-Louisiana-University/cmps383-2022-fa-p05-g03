
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

export type ListingDto  = {
    id: number,
    name: string,
    price: number,
    startUtc: Date,
    endUtc: Date
    
};