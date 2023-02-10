import {apiImageUrl, apiInfoUrl} from '../utils/constants'
import { AllCHaracters } from '../utils/types';

export const getAllCharacters = async(page: number = 1): Promise<AllCHaracters> => {
    try {
        const url = `${apiInfoUrl}/people/?page=${page}`
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export const getCharacterImage = (id: number) => {
    try {
        return `${apiImageUrl}/${id}.jpg`;

    } catch (error) {
        throw error;
    }
}