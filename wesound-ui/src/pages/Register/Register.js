import request from "../../api/request";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import "./Register.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm(
        {
            defaultValues: {
                username: '',
                password: '',
                repeatPassword: '',
            }
        }
    );
    const navigate = useNavigate();
    const [urlSearchParams, setUrlSearchParams] = useSearchParams();
    const returnPage = urlSearchParams.get('from');
    const onSubmit = async (values) => {
        let id;
        const { username, password, repeatPassword } = values;
        try {
            id = toast.loading("Registering...");
            const res = await request({
                url: "/api/auth/register",
                method: "post",
                data: {
                    username,
                    password,
                    repeatPassword
                }
            });
            if (res.success) {
                toast.update(id, {
                    render: "Sign up successfuly",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    closeButton:true
                })
                setTimeout(()=>{
                    returnPage ? navigate(`/${returnPage}`) : navigate("/");
                }, 3000);
            }           
        } catch (err) {
            toast.update(id, {
                render: err.message,
                type: "error",
                isLoading: false,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                closeButton:true
            })
        }
    };
    console.log("errors", errors);
    return (
        <div className="Register container-fluid" style={{ background: "#fafafa" }}>
            <div className="vh-100 justify-content-md-center align-items-center row">
                <div className="col-md-4 col-12">
                    <div className="card-wrapper p-4">
                        <form className="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <h4 className="mb-4">We Sound</h4>
                            <div className="mb-4">
                                <label htmlFor="uname" className="form-label">User Name:<span style={{color:"red"}}> * </span></label>
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
                                <label htmlFor="upass" className="form-label">Password:<span style={{color:"red"}}> * </span></label>
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
                                    {errors?.password?.type === 'minLength' && <p>Password must be more than 8 characters</p>}
                                </div>
                                <label htmlFor="confirm" className="form-label">Confirm password:<span style={{color:"red"}}> * </span></label>
                                <div className="form-group">
                                    <input
                                        id="confirm"
                                        placeholder="Enter your confirm password..."
                                        type="password"
                                        className="form-control"
                                        autoComplete="off"
                                        {...register("repeatPassword", {
                                            required: true, validate: (value) => {
                                                if (value !== watch('password')) return false;
                                                return true;
                                            }
                                        })}
                                    />
                                    {errors?.repeatPassword?.type === 'required' && <p>Confirm password is required</p>}
                                    {errors?.repeatPassword?.type === 'validate' && <p>Your comfirm passwords do no match</p>}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="card-wrapper mt-4 p-3">
                        <div>
                            Have already an account? <Link to="/login">Login here</Link>
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