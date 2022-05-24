import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../../shared/Loading';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        // console.log(user);
        navigate('/');
    }

    let displayError;

    if (error) {
        displayError = <p className='text-red-500'>{error.message}</p>
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className="btn btn-wide font-bold text-lg text-white">Login with GOOGLE</button>
            {displayError}
        </div>
    );
};

export default SocialLogin;