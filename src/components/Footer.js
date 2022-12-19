import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-section'>
            <div>
                    <h4 className="text-lg">Newsletter</h4>
                    <div className="w-20">
                        <label className="label">
                            <span className="label-text mb-4 text-white">Subscribe For New Product Updates</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="enter your email" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
             <footer className="footer ">
                
                <div>
                    <h2 className="footer-title">Services</h2>
                    <a className="link link-hover">Branding</a> <br/>
                    <a className="link link-hover">Design</a><br/>
                    <a className="link link-hover">Marketing</a><br/>
                    <a className="link link-hover">Advertisement</a><br/>
                </div>
                <div>
                    <h2 className="footer-title">Company</h2>
                    <a className="link link-hover">About us</a><br/>
                    <a className="link link-hover">Contact</a><br/>
                    <a className="link link-hover">Jobs</a><br/>
                    <a className="link link-hover">Press kit</a><br/>
                </div>
                <div>
                    <h2 className="footer-title">Legal</h2>
                    <a className="link link-hover">Terms of use</a><br/>
                    <a className="link link-hover">Privacy policy</a><br/>
                    <a className="link link-hover">Cookie policy</a><br/>
                </div>
                
            </footer>
        </div>
    );
};

export default Footer;