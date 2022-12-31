import axios from "axios";
import { useState } from "react";

export const ApiHP = axios.create({
    baseURL: `https://hp-api.onrender.com/api/`
})

export const AllCharacters = axios.create ({
    baseURL: 'https://hp-api.onrender.com/api/characters'
})

const URL = `https://hp-api.onrender.com/api/`

export const GetAllChar = async () => {

    const dados = await axios.get(`${URL}characters`);
    return dados
}
