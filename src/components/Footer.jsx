import { useEffect, useState } from "react";
import axios from 'axios';
import { apiKey, hash } from "./ApiPasswords";

const Footer = () => {
    const [copywrite, setCopywrite] = useState('');


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`
            );
            setCopywrite(response.data.attributionText);
        } catch (error) {
            console.error("Error getting the footer data: ", error);
            alert('Error fetching footer data, check console for details.')
        }
    };

    return (
        <>
            <address className="bg-primary text-white pt-5 px-2 mb-0">
                {copywrite}
            </address>
        </>
    );

};

export default Footer;