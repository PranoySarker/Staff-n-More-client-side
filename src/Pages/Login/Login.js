import React, { useEffect } from 'react';
import SocialLogin from './SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            // console.log(user);
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading) {
        return <Loading></Loading>
    }

    let displayError;

    if (error) {
        displayError = <p className='text-red-500'>{error.message}</p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className=' flex justify-center items-center my-20'>


            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center">LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs bg-base-100"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>

                        </div>

                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs bg-base-100"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 charecters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>

                        </div>

                        <input className='btn w-full text-lg' type="submit" value='Login' />
                        {displayError}
                        <p className='mt-3'>Don't have account?<Link to='/signup' className='text-blue-500'>Please Register</Link></p>
                    </form>

                    <div className="divider bg-slate-200">OR</div>
                    <div className="grid h-20 card rounded-box place-items-center">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;