import React, {useEffect, useState} from "react";
import { IDataGender, IDataCountry } from '../models';

export default function useRequest(ref: React.MutableRefObject<HTMLInputElement>) {
    const [dataGender, setDataGender] = useState<IDataGender>();
    const [dataCountry, setDataCountry] = useState<IDataCountry>();
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        if (dataGender && dataCountry) {
            try {
                if (dataGender.gender == null) {
                    setMessage(`i can't recognise this name :(`);
                } else {
                    const text = `${dataGender.name} is ${dataGender.gender} from ${dataCountry.country[0].country_id}`;
                    setMessage(text);
                }
            } catch (error) {
                const text = `i can't recognize this name :(`;
                setMessage(text);
            }
            
        }
    }, [dataGender, dataCountry])

    const request = async (url: string) => {
        const response = await fetch(url);
        return await response.json();
    };

    const submitHandler = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const name = ref.current.value;

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
        } else {
            setMessage('please enter first name to see the result');
        }
    };

    return { message, submitHandler };

}