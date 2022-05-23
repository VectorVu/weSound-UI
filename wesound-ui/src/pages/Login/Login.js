// import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm(
        {
            defaultValues: {
                username: '',
                password: ''
            }
        }
    );
    const onSubmit = (values) => {
        console.log(values);
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
                                <div className="form-group">
                                    <input
                                        placeholder="Enter your email..."
                                        className="form-control"
                                        autoComplete="off"
                                        {...register("username", {required: true})}
                                    />
                                    {errors?.username?.type === 'required' && <p>Username is required</p>}
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder="Enter your password..."
                                        type="password"
                                        className="form-control"
                                        autoComplete="off"
                                        {...register("password", {required:true, minLength: 6})}
                                    />
                                    {errors?.password?.type === 'required' && <p>Password is required</p>}
                                    {errors?.password?.type === 'minLength' && <p>Password must be more than 6 characters</p>}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Đăng nhập
                            </button>
                        </form>
                    </div>
                    <div className="card-wrapper mt-4 p-3">
                        <div>
                            No account? <a href="/signup">Sign up here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}