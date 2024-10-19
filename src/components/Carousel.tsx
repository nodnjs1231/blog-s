import { useState } from "react";

const IMAGE_1_URL = "https://images.unsplash.com/photo-1729108918012-692006662836?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_2_URL = "https://images.unsplash.com/photo-1728819709843-7a315e67aa19?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_3_URL = "https://images.unsplash.com/photo-1727651664283-8d32aa0cb6fa?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


export default function Carousel(){
    const [activeImages, setActiveImage] = useState(1);

    return(
        <div className="carousel">
            <ul className="carousel__slides">
                <input  //active한지 안한지 체크하는 용도. 보이지 않음
                    type="radio"
                    name="radio-buttons"
                    id="img-1"
                    checked={activeImages === 1}
                    readOnly
                />
                <li className="carousel__slide-container">
                    <div className="carousel__slide-img">
                        <img 
                            alt="scenery 1"
                            src={IMAGE_1_URL}
                        />
                    </div>
                    <div className="carousel__controls">
                        <label 
                            onClick={() => setActiveImage(3)}
                            className="carousel__slide-prev"
                        >
                            <span>&lsaquo;</span>
                        </label>
                        <label 
                            onClick={() => setActiveImage(2)}
                            className="carousel__slide-next"
                        >
                            <span>&rsaquo;</span>
                        </label>
                    </div>
                </li>
                <input  //active한지 안한지 체크하는 용도. 보이지 않음
                    type="radio"
                    name="radio-buttons"
                    id="img-2"
                    checked={activeImages === 2}
                    readOnly
                />
                <li className="carousel__slide-container">
                    <div className="carousel__slide-img">
                        <img 
                            alt="scenery 2"
                            src={IMAGE_2_URL}
                        />
                    </div>
                    <div className="carousel__controls">
                        <label 
                            onClick={() => setActiveImage(1)}
                            className="carousel__slide-prev"
                        >
                            <span>&lsaquo;</span>
                        </label>
                        <label 
                            onClick={() => setActiveImage(3)}
                            className="carousel__slide-next"
                        >
                            <span>&rsaquo;</span>
                        </label>
                    </div>
                </li>
                <input  //active한지 안한지 체크하는 용도. 보이지 않음
                    type="radio"
                    name="radio-buttons"
                    id="img-3"
                    checked={activeImages === 3}
                    readOnly
                />
                <li className="carousel__slide-container">
                    <div className="carousel__slide-img">
                        <img 
                            alt="scenery 3"
                            src={IMAGE_3_URL}
                        />
                    </div>
                    <div className="carousel__controls">
                        <label 
                            onClick={() => setActiveImage(2)}
                            className="carousel__slide-prev"
                        >
                            <span>&lsaquo;</span>
                        </label>
                        <label 
                            onClick={() => setActiveImage(1)}
                            className="carousel__slide-next"
                        >
                            <span>&rsaquo;</span>
                        </label>
                    </div>
                </li>
                <div className="carousel__dots">
                    <label
                        onClick={() => setActiveImage(1)}
                        className="carousel__dot"
                        id="img-dot-1"
                    ></label>
                    <label
                        onClick={() => setActiveImage(2)}
                        className="carousel__dot"
                        id="img-dot-2"
                    ></label>
                    <label
                        onClick={() => setActiveImage(3)}
                        className="carousel__dot"
                        id="img-dot-3"
                    ></label>
                </div>
            </ul>
        </div>
    );
}
