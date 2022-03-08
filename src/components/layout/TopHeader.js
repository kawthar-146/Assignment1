import React from 'react'
import logo1 from '../../images/Path 31.png'
// import "../card.css"
const TopHeader = () => {
    return (
        <>
        <section className="topHeader">
            <div className="row">
                {/* <div className="col-12"> */}
                <div className='col-3 text-center'>
                <img src={logo1} className='img1' />
                   </div>
                   <div className="col-9 col-lg-9">
                    <p className="par">
                        Just To Let You Know, We're Running As Usual & Working Hard To Keep You Safe With Contact-Free Delivery
                    </p>
                </div>
            </div>
        </section>
        </>
    );
};

export default TopHeader