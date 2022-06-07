import request from "../../api/request";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from 'react-router-dom';
import "./Login.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: {
                username: '',
                password: ''
            }
        }
    );
    const { login } = useAuth();
    const [urlSearchParams] = useSearchParams();
    const preUrl = urlSearchParams.get('preUrl');
    const onSubmit = async (values) => {
        let id;
        const { username, password } = values;
        try {
            id = toast.loading("login...");
            const res = await request({
                url: "/api/auth/login",
                method: "post",
                data: {
                    username,
                    password
                }
            });
            if (res.success) {
                toast.update(id, {
                    render: "Sign in successfuly",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    closeButton: true
                })

                login({
                    _id: res.data._id,
                    token: res.data.token,
                    preUrl: preUrl ?? ''
                })

            }
        } catch (err) {
            toast.update(id, {
                render: err.response.data.message,
                type: "error",
                isLoading: false,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                closeButton: true,
                autoComplete: true
            });
        }
    };
    console.log("errors", errors);
    return (
        <div className="Login container-fluid" style={{ background: "#fafafa" }}>
            <div className="vh-100 justify-content-md-center align-items-center row">
                <div className="col-md-4 col-12">
                    <div className="card-wrapper p-4">
                        <form className="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <h4 className="mb-4">We Sound</h4>
                            <div className="mb-4">
                                <label htmlFor="uname" className="form-label">User Name:<span style={{ color: "red" }}> * </span></label>
                                <div className="form-group">
                                    <input
                                        id="uname"
                                        placeholder="Enter your username..."
                                        className="form-control"
                                        autoComplete="off"
                                        {...register("username", { required: true, minLength: 2 })}
                                    />
                                    {errors?.username?.type === 'required' && <p>Username is required</p>}
                                    {errors?.username?.type === 'minLength' && <p>Username must be more than 2 characters</p>}
                                </div>
                                <label htmlFor="upass" className="form-label">Password:<span style={{ color: "red" }}> * </span></label>
                                <div className="form-group">
                                    <input
                                        id="upass"
                                        placeholder="Enter your password..."
                                        type="password"
                                        className="form-control"
                                        autoComplete="off"
                                        {...register("password", { required: true, minLength: 8 })}
                                    />
                                    {errors?.password?.type === 'required' && <p>Password is required</p>}
                                    {errors?.password?.type === 'minLength' && <p>Password must be more than 6 characters</p>}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Login
                            </button>
                            <button type="button" className="btn btn-danger btn-block" style={{ marginLeft: "10px" }}>
                                <Link to="/" style={{ textDecoration: "none", color: "white" }}>Cancel</Link>
                            </button>
                        </form>
                    </div>
                    <div className="card-wrapper mt-4 p-3">
                        <div>
                            No account? <Link to="/register">Sign up here</Link>
                        </div>
                        <ToastContainer position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover />
                    </div>
                </div>
            </div>
        </div>
    )
}