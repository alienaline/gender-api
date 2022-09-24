export interface IDataGender {
    name: string;
    gender: string;
    probability: number;
    count: number;
}

export interface IDataCountry {
    name: string;
    country: {
        country_id: string;
        probability: number;
    }[];
}
