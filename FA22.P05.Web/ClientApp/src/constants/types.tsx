export type Error = {
    property: string;
    message: string;
};
export type ApiResponse<T> = {
    data: T;
    errors: Error[];
    hasErrors: boolean;
}
export type ListingDto = {
    id: number;
    name: string;
    description: string;
    price: number;
    startUtc: Date;
    endUtc: Date;
    phoneNum: string;
    eMail: string;
};

export type LoginDto = {
    username: string;
    password: string;
};

export type BidDto = {
    id: number;
    userId: number;
    bidAmount: number;
    listingId: number;
}