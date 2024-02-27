import React from 'react'
import './Product.css'; 
import logo from '../components/Tide.png';

function product() {
    const list = [
        {
            name: 'Tide Powder',

            image: logo,
        },
        {
            name: 'Tide Powder',
            image: logo,
        }
    ];

    return (
        <div className="container">
            
            <h1 className='title'>E commerce</h1>
            <div className="body">
             <ul className="product-list">
                    {list.map(content => (
                        <li key={content.name}> 
                            <div className="product">
                                <div className="product-image">
                                    <img src={logo} alt={content.name} />
                                </div>
                                <div className="product-information">
                                    <h4>{content.name}</h4>
                                    <div className="specification">
                                        <span>washing pouder, very good project</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default product