import {CDBFooter, CDBBtn, CDBIcon, CDBBox} from 'cdbreact';

import './footer.css';

export const Footer = () => {
    return (
        <CDBFooter className="shadow">
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
                            src="https://lh4.googleusercontent.com/-lHW1NSDlcNE/AAAAAAAAAAI/AAAAAAAAAAA/p-_qKM4PDIM/s66-p-k-no-ns-nd/photo.jpg"
                            width="30px"
                        />
                        <span className="ml-4 h5 mb-0 font-weight-bold"> Movies</span>
                    </a>
                </CDBBox>
                <CDBBox>
                    <small className="ml-2">&copy; Movies, 2022. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};