import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-white">
            <div>
                <h2 className='text-xl text-yellow-500 font-semibold'>CONTACT INFO</h2>
                <p className='text-xl'><span className=' text-yellow-500 font-semibold'>Address:</span> XYZ street,Mirpur-1,Dhaka</p>
                <p className='text-xl'><span className=' text-yellow-500 font-semibold'>Phone:</span> 017-XXXXXXXX</p>
                <p className='text-xl'><span className=' text-yellow-500 font-semibold'>E-mail:</span> abc@def.com</p>
            </div>

            <div>
                <span className="text-2xl font-semibold">Legal</span>
                <ul className='text-xl'>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
                    <li>Cockie Policy</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;