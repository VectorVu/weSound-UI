import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './upload.css';

export default function Upload(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm(
        {
            defaultValues: {
                title: '',
                streamUrl:'',
                author:'',
                genre:'none'
            }
        }
    );
    const onSubmit =(values)=>{
        console.log(values);
    }
    return(
        <div className="Upload container-fluid" style={{ background: "#fafafa" }}>
            <div className="paper">
               
                    <div className="card-wrapper p-4">
                        <form className="upload-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <h4 className="mb-4">We Sound - Upload your track</h4>
                            <div className="uploadForm-container">
                            <div className="inputTrackImage">
                               <img src="https://file.tinnhac.com/2017/09/07/1474013063anh-ngang-71c3.jpg" style={{width:250, height:250}}/>
                               <div className="inputFile-custom">
                               <input 
                                 type="file"
                                 accept="image/jpeg,image/pjpeg,image/gif,iamge/png"
                                 id ="trackImg"
                                 />
                                 <label htmlFor="trackImg" className="inputFile-label">Choose a Photo</label>
                               </div>
                                
                            </div>
                            <div className="mb-4 inputIformation">
                            <div className="form-group">
                            <div >
                               <input 
                                 type="file"
                                 accept="image/jpeg,image/pjpeg,image/gif,iamge/png"
                                 id ="trackMp3"
                                 />
                                 <label htmlFor="trackMp3" >Choose a File</label>
                               </div>
                            </div>  
                                <label htmlFor="title" className="form-label">Title:<span style={{color:"red"}}> * </span></label>
                                <div className="form-group">
                                    <input
                                        id="title"
                                        placeholder="Name your track..."
                                        className="form-control"
                                        autoComplete="off"
                                        {...register("title", { required: true, minLength: 1 })}
                                    />
                                    {errors?.title?.type === 'required' && <p>Trackname is required</p>}
                                    {errors?.title?.type === 'minLength' && <p>Trackname must be more than 2 characters</p>}
                                </div>
                                <label htmlFor="author" className="form-label">Author:<span style={{color:"red"}}> * </span></label>
                                <div className="form-group">
                                    <input
                                        id="author"
                                        placeholder="Enter author name..."
                                        className="form-control"
                                        autoComplete="off"
                                        {...register("author", { required: true, minLength: 1 })}
                                    />
                                    {errors?.author?.type === 'required' && <p>author is required</p>}
                                    {errors?.author?.type === 'minLength' && <p>author must be more than 1 characters</p>}
                                </div>
                                <label htmlFor="genre" className="form-label">Genre:</label>
                                <div className="form-group">
                                    <select id="genre" {...register("genre")}>
                                        <option value="none">none</option>
                                        <option value="Classical">Classical</option>
                                        <option value="Country">Country</option>
                                        <option value="Dance & EDM">Dance & EDM</option>
                                        <option value="Disco">Disco</option>
                                        <option value="Electronic">Electronic</option>
                                        <option value="Hip-hop & Rap">Hip-hop & Rap</option>
                                        <option value="House">House</option>
                                        <option value="Indie">Indie</option>
                                        <option value="Jazz & Blue">Jazz & Blue</option>
                                        <option value="Latin">Latin</option>
                                        <option value="Piano">Piano</option>
                                        <option value="Pop">Pop</option>
                                        <option value="R&B & Soul">R&B & Soul</option>
                                        <option value="Rock">Rock</option>
                                        <option value="Trap">Trap</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                Save
                            </button>
                            </div>
                           
                            </div>
                           
                           
                           
                        </form>
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
    )
}