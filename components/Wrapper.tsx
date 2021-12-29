import React, {Component} from 'react';
import Head from "next/head";

const Wrapper = (props) => {
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                      crossOrigin="anonymous"/>
                <title>Checkout</title>
                <script src="https://js.stripe.com/v3/"></script>
            </Head>
            <div className="container">
                {props.children}
            </div>
        </>
    );
}

export default Wrapper;