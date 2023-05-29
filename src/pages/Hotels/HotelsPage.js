import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function HotelsPage(){
    const { id, cidadeDestino } = useParams();
    const [hotel, setHotel] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
       .get(`${process.env.REACT_APP_API_URL}/hotels/${cidadeDestino}/${id}`)
       .then((res) => {
         setHotel(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
     }, []);
 
     useEffect(() => {
         window.scrollTo(0, 0);
     }, []);

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
          slidesPerView: 1,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          speed: 1500,
          loop: true,
          navigation: true,
          injectStyles: [
              `
                .swiper-wrapper{
                  height: 400px;
                }
  
                .swiper-slide-active img{
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                  border-radius: 15px;
                }

                swiper-slide img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 15px;
                }
            `,
          ],
        };
    
        if (swiperContainer) {
            Object.assign(swiperContainer, params);
            swiperContainer.initialize();
        }
        

        const handlePageRefresh = () => {
          window.scrollTo(0, 0);
        };
    
        window.addEventListener("beforeunload", handlePageRefresh);
    
        return () => {
          window.removeEventListener("beforeunload", handlePageRefresh);
        };
    }, [hotel]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    return(
        <ContainerHotels>
            <div onClick={() => navigate(`/hotels/${cidadeDestino}`)}>
                <AiOutlineArrowLeft/>
                <p>Voltar</p>
            </div>

            <div>
                {hotel.length === 0 ? (<p>Carregando Hotel</p>) : (
                    hotel.map((hotel) => (
                        <>
                        <swiper-container ref={swiperRef} init="false">
                            {hotel.images.map((imagem, index) => 
                                <swiper-slide key={index}>
                                        <img src={imagem} alt="Slide"/>
                                </swiper-slide>
                            )}
                        </swiper-container>
        
                        <div>
                            <div>
                                <div>
                                    <p>{hotel.hotel_name}</p>
                                    <p>{hotel.address}</p>
                                </div>
                                <p>Preço Diária: R$ {hotel.dailyPrice}</p>
                            </div>
                            <div>
                                <div>
                                    <p>{hotel.rating}</p>
                                </div>
                                <div>
                                    <p>{(hotel.rating < 5)?"Ruim":(hotel.rating >5 && hotel.rating < 8)?"Bom":"Muito Bom"}</p>
                                    <p>{hotel.reviewsNumber} reviews</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <p>A hospedagem oferece</p>
                            <div>
                                {hotel.amenities.map((amenity) => (
                                    <div key={amenity.id}>
                                        <img src={amenity.iconUrl} alt="Ícone da comodidade" />
                                        <p>{amenity.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
        
                        <div>
                            <p>Conheça um pouco mais</p>
                            <p>{hotel.description}</p>
                        </div>
                        </>
                    ))
                )}
            </div>
        </ContainerHotels>
    );
}

const ContainerHotels = styled.div`
    width: 100%;
    min-height: 1000px;
    height: auto;
    margin-top: 80px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    >div:nth-of-type(1){
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid #2A95AE;

        >svg{
            font-size: 18px;
            margin-left: 80px;
            margin-right: 10px;
            cursor: pointer;
            color: #2A95AE;
        }

        >p{
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #2A95AE;
            cursor: pointer;
        }
    }

    >div:nth-of-type(2){
        width: 1000px;
        min-height: 700px;
        height: auto;
        background-color: white;
        -webkit-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
        box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
        border-radius: 15px;
        margin-bottom: 30px;

        >div:nth-of-type(1){
            width: 100%;
            height: 250px;
            border-bottom: 1px solid #CCCCCC;
            
            >div:nth-of-type(1){
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 70px;
                margin-bottom: 45px;

                >div{
                    margin-left: 20px;
                    
                    >p:nth-of-type(1){
                        font-family: 'Poppins', sans-serif;
                        font-size: 30px;
                        font-weight: 700;
                        color: #2E2D33;
                        margin-bottom: 20px;
                    }

                    >p:nth-of-type(2){
                        font-family: 'Poppins', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #2E2D33;
                    }
                }

                >p{
                    font-family: 'Poppins', sans-serif;
                    font-size: 16px;
                    font-weight: 700;
                    color: #2E2D33;
                    margin-right: 20px;
                }
            }

            >div:nth-of-type(2){
                display: flex;
                gap: 0px 20px;
                margin-left: 20px;

                >div:nth-of-type(1){
                    width: 50px;
                    height: 50px;
                    background-color: green;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    >p{
                        font-family: 'Poppins', sans-serif;
                        font-size: 20px;
                        font-weight: 700;
                        color: white;
                    }
                }

                >div:nth-of-type(2){
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    >p{
                        font-family: 'Poppins', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #2E2D33;
                    }
                }
            }
            
        }

        >div:nth-of-type(2){
            width: 100%;
            min-height: 220px;
            height: auto;
            background-color: white;
            border-bottom: 1px solid #CCCCCC;
            display: flex;
            flex-direction: column;

            >p{
                font-family: 'Poppins', sans-serif;
                font-size: 16px;
                font-weight: 700;
                margin-top: 45px;
                margin-bottom: 25px;
                color: #2E2D33;
                margin-left: 20px;
            }

            >div{
                width: calc(100% - 20px);
                height:80px;
                margin: 0px auto 20px auto;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0px 40px;

                >div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    >img{
                        width: 50px;
                        height: 50px;
                        object-fit: cover;
                    }

                    >p{
                        font-family: 'Poppins', sans-serif;
                        font-size: 16px;
                        font-weight: 700;
                    }
                }
            }
        }

        >div:nth-of-type(3){
            width: 100%;
            height: auto;
            background-color: white;
            display: flex;
            flex-direction: column;
            gap: 30px 0px;

            >p:nth-of-type(1){
                font-family: 'Poppins', sans-serif;
                font-size: 18px;
                font-weight: 700;
                margin-top: 30px;
                color: #2E2D33;
                margin-left: 20px;
            }

            >p:nth-of-type(2){
                display: block;
                margin-left: 20px;
                margin-right: 20px;
                font-size: 12px;
                font-weight: 700;
                color: #2E2D33;
                line-height: 24px;
                margin-bottom: 20px;
                white-space: pre-wrap;
                word-wrap: break-word;
                text-align: justify;
            }
        }
    }
`;


