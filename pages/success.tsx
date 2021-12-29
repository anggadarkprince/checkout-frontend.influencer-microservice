import React, {Component, useEffect} from 'react';
import Wrapper from "../components/Wrapper";
import axios from "axios";
import {useRouter} from "next/router";
import constants from "../constants";

const Success = () => {
    const router = useRouter();
    const {source} = router.query;

    useEffect(() => {
        if (source !== undefined) {
            (
                async () => {
                    await axios.post(`${constants.endpoint}/orders/confirm`, {
                        source: source
                    });
                }
            )();
        }
    }, [source]);

    return (
        <Wrapper>
            <div className="py-5 text-center">
                <h2>Success</h2>
                <p className="lead">Your purchase has been completed!</p>
            </div>
        </Wrapper>
    );
};

export default Success;