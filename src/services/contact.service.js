
import { API_DATA } from "../constants/base";

export const SendingDetails = async (val) => {
    try {
        const res = await fetch(API_DATA.contactAPI, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(
                val
            ),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}