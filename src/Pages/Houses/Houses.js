import React, { useEffect, useState } from 'react';
import House from '../House/House';

const Houses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch("house.json")
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])
    return (
        <div>
            {/* Search Section */}
            <div className='my-10'>
                <h1 className='text-3xl font-bold'>Search properties to rent</h1>
                <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                    <div class="card  bg-base-100 shadow-xl border">
                        <div class="card-body">
                            <h2 class="card-title">Location</h2>
                            <select class="select select-bordered w-full max-w-xs">
                                <option>Gaibandha, Bangladesh</option>
                                <option>Gobindaganj, Bangladesh</option>
                                <option>Bogra, Bangladesh</option>
                                <option>Dhaka, Bangladesh</option>
                            </select>
                        </div>
                    </div>
                    <div class="card  bg-base-100 shadow-xl border">
                        <div class="card-body">
                            <h2 class="card-title">Price</h2>
                            <select class="select select-bordered w-full max-w-xs">
                                <option>&gt;1000</option>
                                <option>&gt;1000, &lt;2000</option>
                                <option>&gt;2000, &lt;3000</option>
                                <option>&gt;3000</option>
                            </select>
                        </div>
                    </div>
                    <div class="card  bg-base-100 shadow-xl border">
                        <div class="card-body">
                            <h2 class="card-title">Type</h2>
                            <select class="select select-bordered w-full max-w-xs">
                                <option>House</option>
                                <option>Flat</option>
                                <option>Floor</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* All Properties */}
            <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    houses.map(house => <House
                        key={house.id}
                        house={house}
                    />)
                }
            </div>
        </div>
    );
};

export default Houses;