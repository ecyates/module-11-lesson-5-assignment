import { useEffect, useState } from "react";
import axios from 'axios';
import { apiKey, hash } from "./ApiPasswords";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <footer className="container-fluid bg-primary text-white mt-5 pt-5">
            <Row>
                <div className="lead col-md-6 text-center"><b>Thanks <a className='text-info' href="https://developer.marvel.com/" target='_blank'>Marvel API</a> for the incredible resource!</b></div>
                <address className="col-md-6 text-center">&copy;2024 Elizabeth Yates. All rights reserved.</address>
            </Row>
        </footer>
            {/* <address className="bg-primary text-white pt-5 px-2 mb-0">
                {copywrite}
            </address> */}
        </>
    );

};

export default Footer;