import request from "../../api/request";
import React from "react";
import clsx from 'classnames';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
import { toast, ToastContainer } from 'react-toastify';
import ImageUploader from 'react-images-upload';

import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
    const [image, setImage] = React.useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm(
        {
            defaultValues: {
                username: '',
                password: '',
                repeatPassword: '',
                avatarUrl: ''
            }
        }
    );
    const uploadFile = async (type, file) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await request({
                url: `/api/upload/${type}`,
                method: 'POST',
                data: formData
            });
            return res.data;
        } catch (error) {
            return '';
        }
    }
    const onDrop = images => {
        setImage(images[0]);
    };
    const clsUpload = clsx({
        'has-picture': image,
        'upload-input': true
    });
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        let id;
        let avatarUrl = 'https://media.istockphoto.com/vectors/black-cats-head-with-headphones-icon-isolated-on-white-tough-cool-tom-vector-id1276562891?k=20&m=1276562891&s=612x612&w=0&h=AkXMr3zEzEFa-SwQwEx0Lj8nmFeS6-tQaAed0WeCLnM=';
        if (image) {
            avatarUrl = await uploadFile('img', image);
        }
        const { username, password, comfirmPassword } = values;
        try {
            id = toast.loading("Registering...");
            const res = await request({
                url: "/api/auth/register",
                method: "post",
                data: {
                    username,
                    password,
                    comfirmPassword,
                    avatarUrl
                }
            });
            if (res.success) {
                toast.update(id, {
                    render: "Sign up successfuly",
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    closeButton: true
                })
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (err) {
            console.log(err);
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
                closeButton: true
            })
        }
    };

    return (
        <div className="Register container-fluid" style={{ background: "#fafafa" }}>
            <div className="vh-100 justify-content-md-center align-items-center row">
                <div className="col-md-4 col-12">
                    <div className="card-wrapper p-4">
                        <form className="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <h4 className="mb-4">We Sound - Sign Up</h4>
                            <div className="uploadForm-container">
                                <div className="inputUserImage">
                                    <ImageUploader
                                        className={clsUpload}
                                        onChange={onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}
                                        singleImage={true}
                                        withPreview={true}
                                        withLabel={false}
                                    />
                                </div>
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
                                        {errors?.password?.type === 'minLength' && <p>Password must be more than 8 characters</p>}
                                    </div>
                                    <label htmlFor="confirm" className="form-label">Confirm password:<span style={{ color: "red" }}> * </span></label>
                                    <div className="form-group">
                                        <input
                                            id="confirm"
                                            placeholder="Enter your confirm password..."
                                            type="password"
                                            className="form-control"
                                            autoComplete="off"
                                            {...register("comfirmPassword", {
                                                required: true, validate: (value) => {
                                                    if (value !== watch('password')) return false;
                                                    return true;
                                                }
                                            })}
                                        />
                                        {errors?.repeatPassword?.type === 'required' && <p>Confirm password is required</p>}
                                        {errors?.repeatPassword?.type === 'validate' && <p>Your comfirm passwords do no match</p>}
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Sign Up
                                    </button>
                                    <button type="button" className="btn btn-danger btn-block" style={{marginLeft: "10px"}}>
                                        <Link to="/" style={{ textDecoration: "none", color: "white"}}>Cancel</Link>
                                    </button>
                                </div>
                            </div>
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
        </div >
    )
}