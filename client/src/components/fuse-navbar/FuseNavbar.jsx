import React, {useState} from 'react';
import "./FuseNavbar.css";
import Fuse from "../../assets/images/logos/fuse.jpg"

function FuseNavbar(){
    return(
        <div id="fuse-navbar" className="jss6 more">
            <div className="jss8 jss9" style={{backgroundColor: 'rgb(18, 18, 18)'}}>
                <div className="flex flex-col overflow-hidden h-full jss13">
                    <header className="MuiPaper-root-1375 MuiAppBar-root-1404 MuiAppBar-positionStatic-1408 MuiAppBar-colorPrimary-1411 flex flex-row items-center flex-shrink h-48 md:h-64 min-h-48 md:min-h-64 px-12 MuiPaper-elevation0-1378">
                        <div className="flex flex-1 mx-8">
                            <div className="jss1415 flex items-center">
                                <img className="logo-icon" src={Fuse} alt="logo"/>
                                <p className="MuiTypography-root-1417 text-16 mx-12 font-light logo-text MuiTypography-body1-1419 MuiTypography-colorInherit-1439">FUSE</p>
                            </div>
                        </div>
                        <button className="MuiButtonBase-root-1483 MuiIconButton-root-1499 w-40 h-40 p-0 MuiIconButton-colorInherit-1502" tabindex="0" type="button">
                            <span className="MuiIconButton-label-1506">
                                <span className="material-icons MuiIcon-root-1484" aria-hidden="true">Menu</span>
                            </span>
                            <span className="MuiTouchRipple-root-1730"></span>
                        </button>
                    </header>
                </div>
            </div>
        </div>
    )
}
export default FuseNavbar;
