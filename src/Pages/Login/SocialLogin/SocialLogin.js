import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className="btn btn-wide font-bold text-lg text-white">Login with GOOGLE</button>
        </div>
    );
};

export default SocialLogin;