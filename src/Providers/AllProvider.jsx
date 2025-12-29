import React from 'react';
import AllContext from './AllContext';

const productsPromise = fetch("/products.json").then(res => res.json())

const AllProvider = ({children}) => {

    const allData = {
        productsPromise
    }

    return (
        <AllContext value={allData}>
            {children}
        </AllContext>
    );
};

export default AllProvider;