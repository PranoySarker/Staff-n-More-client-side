import React from 'react';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className=' flex justify-center items-center my-20'>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <div className="divider">OR</div>
                </div>
            </div> */}
            <div className='card w-96 bg-base-100 shadow-2xl'>
                <div className="flex flex-col border-opacity-50 p-5">
                    <div className="grid h-20 card bg-base-200 rounded-box place-items-center">
                        <h2 className="card-title text-2xl font-bold">Login</h2>
                    </div>
                    <div className="divider">OR</div>
                    <div className="grid h-20 card rounded-box place-items-center">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;