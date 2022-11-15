import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import logo from '/Jv/lowcost_avia/frontend/src/img/logo.png'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <CDBFooter className="shadow fixed-bottom py-2 text-white" style={{ backgroundColor: '#212529' }}>
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{ width: '80%' }}
            >
                <CDBBox display="flex" alignItems="center">
                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <img
                            alt="logo"
                            src={logo}
                            width="30px"
                        />  
                    </a>
                    <Container>

                        <small className="">&copy; Avia, 2022. All rights reserved.</small>
                    </Container>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn outline color="white" className="mx-3 p-2">
                        <a href="https://www.instagram.com/andrushapyro/" target="_blank" display="none">
                            <CDBIcon fab icon="instagram" />
                        </a>
                    </CDBBtn>

                    <CDBBtn outline color="white" className="p-2">
                        <a href="https://twitter.com/pyrokinezis" target="_blank" display="none">

                            <CDBIcon fab icon="twitter" />
                        </a>
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer;