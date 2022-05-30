import axios from "axios";
import React from "react";
import clsx from 'classnames';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './upload.css';
import ImageUploader from 'react-images-upload';

export default function Upload() {
    const [image, setImage] = React.useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: {
                title: '',
                streamUrl: '',
                imageUrl: '',
                author: '',
                genre: 'none'
            }
        }
    );
    const uploadFile = async (type, file) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios({
                url: `http://localhost:9009/api/upload/${type}`,
                method: 'POST',
                data: formData
            });
            return res.data.data;
        } catch (error) {
            return '';
        }
    }
    const onSubmit = async (values) => {
        let id;
        if(values.streamUrl[0]){
            id = toast.loading("Uploading...");
            let imageUrl='https://file.tinnhac.com/2017/09/07/1474013063anh-ngang-71c3.jpg';
            if(image){
                imageUrl = await uploadFile('img', image);
            }
            const streamUrl = await uploadFile('audio', values.streamUrl[0]);
            try {
                const res = await axios({
                    url:'http://localhost:9009/api/track',
                    method:'POST',
                    data:{
                        title: values.title,
                        streamUrl,
                        imageUrl,
                        author: values.author,
                        genre: values.genre
                    }
                })
                if(res.data.success){
                    toast.update(id, {
                        render: "Upload track successfuly",
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
                }
            } catch (error) {
                toast.update(id, {
                    render: error.message,
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
        }
    }
    const onDrop = images => {
        setImage(images[0]);
    };
    const clsUpload = clsx({
        'has-picture': image,
        'upload-input': true
    });

    return (
        <div className="Upload container-fluid" style={{ background: "#fafafa" }}>
            <div className="paper">
                <div className="card-wrapper p-4">
                    <form className="upload-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <h4 className="mb-4">We Sound - Upload your track</h4>
                        <div className="uploadForm-container">
                            <div className="inputTrackImage">
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
                            <div className="mb-4 inputIformation">
                                <div className="form-group">
                                    <div >
                                    <label htmlFor="trackMp3" className="form-label">Choose your mp3 file:<span style={{ color: "red" }}> * </span></label>
                                        <input
                                            
                                            type="file"
                                            accept="audio/mpeg, audio/mp3"
                                            id="trackMp3"
                                            {...register('streamUrl', { required: true })}
                                        />
                                      
                                        {errors?.streamUrl?.type === 'required' && <p>you must choose an mp3 file to upload</p>}

                                    </div>
                                </div>
                                <label htmlFor="title" className="form-label">Title:<span style={{ color: "red" }}> * </span></label>
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
                                <label htmlFor="author" className="form-label">Author:<span style={{ color: "red" }}> * </span></label>
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