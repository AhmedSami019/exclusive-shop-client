import React from 'react';
import AllContext from './AllContext';

const AllProvider = ({children}) => {

    const allData = {
        
    }

    return (
        <AllContext value={allData}>
            {children}
        </AllContext>
    );
};

export default AllProvider;