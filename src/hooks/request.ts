import React, {useState} from "react";
import { IDataGender, IDataCountry } from '../models';

export default function useRequest() {
    const [name, setName] = useState<string>('');
    const [dataGender, setDataGender] = useState<IDataGender>();
    const [dataCountry, setDataCountry] = useState<IDataCountry>();
    const [result, setResult] = useState<string>('');

    const request = async (url: string) => {
        const response = await fetch(url);
        return await response.json();
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setName(event.currentTarget.value);
        console.log(name);
    }

    const submitHandler = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        if (name) {
            const urlGenderize = `https://api.genderize.io?name=${name}`;
            const urlNationalize = `https://api.nationalize.io?name=${name}`;
    
            Promise.all([
                request(urlGenderize),
                request(urlNationalize)
            ])
            .then((response): void => {
                setDataGender(response[0]);
                setDataCountry(response[1]);
            })
            .then((): void => {
                if (dataGender && dataCountry) {
                    const res = `${dataGender.name} is ${dataGender.gender} from ${dataCountry.country[0].country_id}`;
                    setResult(res);  
                }
            })
        }
    };

    return { result, submitHandler, changeHandler };

}