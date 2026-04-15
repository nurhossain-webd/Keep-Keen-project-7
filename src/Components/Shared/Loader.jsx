`use client`
import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex justify-center height-screen ">
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div >
    );
};

export default Loader;