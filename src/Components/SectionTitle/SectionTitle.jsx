import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-9/12 md:w-4/12 text-center mx-auto my-8'>
            <p className='text-[#D99904] italic mb-2'>---{subHeading}---</p>
            <h2 className='text-3xl uppercase 
            border-y-3 border-[#E8E8E8]
            p-3'>{heading}</h2>    
        </div>
    );
};

export default SectionTitle;