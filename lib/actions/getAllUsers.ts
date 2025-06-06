"use server";

import axios from "axios";

export const getAllUsers = async () => {
    const baseUrl = 'http://localhost:3000';
    const response = await axios.get(`${baseUrl}/api/user`);
    return response.data.user;
}