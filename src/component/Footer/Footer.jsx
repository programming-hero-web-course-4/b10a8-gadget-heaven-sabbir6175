import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white py-5 border-2 shadow'>

               <div className='text-center'>
                    <h1 className='text-4xl font-extrabold mb-3 text-[#09080F]'>Gadget Heaven</h1>
                    <p className='text-base font-medium text-[#09080F99]'>Leading the way in cutting-edge technology and innovation.</p>
               </div>
            <footer className="footer mt-3 p-5 md:p-10 md:justify-around">
                <nav>
                    <h6 className="footer-title opacity-100 text-lg font-bold text-[#09080F]">Services</h6>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">Product Support</a>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">Order Tracking</a>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">Shipping & Delivery</a>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100 text-lg font-bold text-[#09080F]">Company</h6>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">About us</a>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">Careers</a>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">Contact</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100 text-lg font-bold text-[#09080F]">Legal</h6>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">Terms of use</a>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">Privacy policy</a>
                    <a className="link link-hover text-[#09080F99] text-base font-normal">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;