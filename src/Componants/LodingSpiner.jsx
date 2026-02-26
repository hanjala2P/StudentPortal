import React from 'react';
import { DotLoader
 } from 'react-spinners';

const LodingSpiner = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <DotLoader
            color="#36d7b7"
             size={60}
             aria-label="Loading Spinner"
             data-testid="loader"
            />

        </div>
    );
};

export default LodingSpiner;