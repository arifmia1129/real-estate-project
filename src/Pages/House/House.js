import React from 'react';

const House = ({ house }) => {
    const { name, rent, image, address, bed, bathroom, type } = house;
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure><img className='h-52 w-full' src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='font-bold'>Price: ${rent}/month</p>
                <p className='font-bold mb-5'>Type: {type}</p>
                <p className='font-bold'>Location: {address}</p>
                <div class="divider"></div>
                <div class="md:grid grid-cols-2 gap-32">
                    <p>Bed: {bed}</p>
                    <p>Bathroom: {bathroom}</p>
                </div>
            </div>
        </div>
    );
};

export default House;