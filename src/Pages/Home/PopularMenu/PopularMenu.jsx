import React, { useEffect, useState } from 'react';
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);


    useEffect(()=>{
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems); 
                console.log(popularItems);
            })
    }, []);

    return (
        <div>
           <section>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-12 my-12 w-11/12 mx-auto'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

           </section> 
        </div>
    );
};

export default PopularMenu;