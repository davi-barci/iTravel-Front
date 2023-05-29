import styled from "styled-components";
import {BsAirplaneFill, BsFillBuildingsFill} from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import CitiesContext from "../../contexts/CitiesContext.js";
import FlightsContext from "../../contexts/FlightsContext.js";
import HotelsContext from "../../contexts/HotelsContext.js";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function HotelsSearch(){
    const { cidadeDestino } = useParams();
    const {cities} = useContext(CitiesContext);
    const {destinationCity, setDestinationCity, originCity} = useContext(FlightsContext);
    const {minValueHotels, setMinValueHotels, maxValueHotels, setMaxValueHotels} = useContext(HotelsContext);
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        
        if(minValueHotels >= maxValueHotels){
            alert("O valor mínimo deve ser menor que o valor máximo...");
            return
        }else{
            navigate(`/hotels/${destinationCity}`);
        }
    }

    useEffect(() => {
        axios
       .get(`${process.env.REACT_APP_API_URL}/hotels/${cidadeDestino}`, {
         params: {
           maxValue: maxValueHotels,
           minValue: minValueHotels
         }
         })
       .then((res) => {
         setHotels(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
 
       setDestinationCity(cidadeDestino);
     }, [cidadeDestino, maxValueHotels, minValueHotels]);
 
     useEffect(() => {
         window.scrollTo(0, 0);
     }, []);


    return(
        <ContainerHotels>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Hospedagens</label>
                    <label>Destino</label>
                    <select name="destination" value={destinationCity.toString()} onChange={(e) => setDestinationCity(Number(e.target.value))}>
                        {cities.map((city) => (
                            <option key={city.id} value={city.id.toString()}>{city.name}</option>
                        ))}
                    </select>
                    <div>
                        <label>Preço Mínimo</label>
                        <label>R$ {minValueHotels}</label>
                    </div>
                    <input type="range" min="0" max="10000" step="50" value={minValueHotels} onChange={(e) => setMinValueHotels(e.target.value)}/>
                    <div>
                        <label>Preço Máximo</label>
                        <label>R$ {maxValueHotels}</label>
                    </div>
                    <input type="range" min="0" max="10000" step="50" value={maxValueHotels} onChange={(e) => setMaxValueHotels(e.target.value)}/>
                    <button type="submit">Procurar</button>
                </form>
            </div>

            <div>
                <div>
                    <div onClick={() => navigate(`/flights/${originCity}/${cidadeDestino}`)}>
                        <BsAirplaneFill/>
                    </div>

                    <div>
                        <BsFillBuildingsFill/>
                    </div>
                </div>

                <div>
                    {hotels.length === 0 ? (
                        <p>Infelizmente, não encontramos nenhum hotel com esses parâmetros 😢</p>
                    ) : (
                        hotels.map((hotel) => (
                        <div key={hotel.hotel_id}>
                            <img src={hotel.imageUrl} alt="Imagem do hotel" />
                            <div>
                            <p>{hotel.hotel_name}</p>
                            <p>{hotel.address}</p>
                            <div>
                                <p>{hotel.rating}</p>
                            </div>
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
                            <p>Preço Diária</p>
                            <p>R$ {hotel.dailyPrice}</p>
                            <button onClick={() => navigate(`/hotels/${destinationCity}/${hotel.hotel_id}`)}>Veja Mais</button>
                            </div>
                        </div>
                        ))
                    )}
                </div>

            </div>
        </ContainerHotels>
    );
}


const ContainerHotels = styled.div`
    width: 100%;
    min-height: 1000px;
    height: auto;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    gap: 0px 25px;
    background-color: white;

    >div:nth-of-type(1){
        width: 255px;
        height: 550px;
        background-color: #2A95AE;
        margin-top: 20px;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
        box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);

        >form{
            display: flex;
            flex-direction: column;
            border-radius: 10px;

            >label:nth-of-type(1){
                color: white;
                font-family: 'Poppins', sans-serif;
                font-size: 18px;
                font-weight: 700;
                margin: 10px auto 0px auto;
                margin-bottom: 30px;
            }

            >label:nth-of-type(2), 
            >label:nth-of-type(3){
                color: white;
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                font-weight: 700;
                margin-left: 10px;
                margin-bottom: 10px;
            }

            >div{
                display: flex;
                justify-content: space-between;

                >label{
                    color: white;
                    font-family: 'Poppins', sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    margin-left: 10px;
                    margin-right: 10px;
                    margin-bottom: 10px;
                }
            }

            >select{
                width: calc(100% - 20px);
                margin: 0px auto 20px auto;
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                font-weight: 700;
                border: 1px solid white;
                background-color: #2A95AE;
                color: white;

                :focus{
                    outline: none;
                }
            }

            >input[type=range]{
                width: calc(100% - 20px);
                margin: 10px auto 20px auto;
                appearance: none;
                -webkit-appearance: none;

                :focus {
                    outline: none;
                }

                ::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    background: #03a9f4;
                    border-radius: 25px;
                }

                ::-webkit-slider-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0 0 4px 0 rgba(0,0,0, 1);
                    cursor: pointer;
                    -webkit-appearance: none;
                    margin-top: -8px;
                }

                :focus::-webkit-slider-runnable-track {
                    background: #03a9f4;
                }
            }

            >button{
                width: 200px;
                height: 35px;
                background-color: #2A95AE;
                border: 1px solid white;
                border-radius: 15px;
                color: white;
                font-family: 'Poppins', sans-serif;
                font-size: 12px;
                font-weight: 700;
                cursor: pointer;
                margin: 120px auto 0px auto
            }
        }
    }

    >div:nth-of-type(2){
        width: 820px;
        min-height: 500px;
        height: auto;
        margin-top: 20px;

        >div:nth-of-type(1){
            width: 100%;
            height: 50px;
            display: flex;
            margin-bottom: 20px;
            border-radius: 10px;
            justify-content: end;

            >div:nth-of-type(1){
                width: 50px;
                height: 100%;
                background-color: white;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                border: 1px solid #CCCCCC;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0px 10px;
                cursor: pointer;

                >svg{
                    font-size: 16px;
                    color: grey;
                }

                >p{
                    font-family: 'Poppins', sans-serif;
                    font-size: 16px;
                    font-weight: 700;
                    color: #2A95AE;
                }
            }

            >div:nth-of-type(2){
                width: 50px;
                height: 100%;
                background-color: #2A95AE;
                border-top-right-radius: 10px;                      
                border-bottom-right-radius: 10px;
                border: 1px solid #CCCCCC;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0px 10px;
                cursor: pointer;

                >svg{
                    font-size: 16px;
                    color: white;
                }

                >p{
                    font-family: 'Poppins', sans-serif;
                    font-size: 16px;
                    font-weight: 700;
                    color: grey;
                }
            }
        }

        >div:nth-of-type(2){
            width: 100%;
            min-height: 400px;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 20px 0px;

            >div{
                width: 100%;
                height: 250px;
                display: flex;
                background-color: white;
                border: 1px solid #CCCCCC;
                border-radius: 10px;

                :hover{
                    -webkit-box-shadow: 10px 10px 3px -8px rgba(0,0,0,0.3);
                    -moz-box-shadow: 10px 10px 3px -8px rgba(0,0,0,0.3);
                    box-shadow: 10px 10px 3px -8px rgba(0,0,0,0.3);
                }

                >img{
                    width: 300px;
                    height: 100%;
                    object-fit: cover;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }

                >div:nth-of-type(1){
                    width: 350px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    border-right: 1px solid #CCCCCC;

                    >p:nth-of-type(1){
                        font-family: 'Poppins', sans-serif;
                        font-size: 20px;
                        font-weight: 700;
                        color: #2E2D33;
                        margin-bottom: 5px;
                        margin-top: 20px;
                        margin-left: 10px;
                    }

                    >p:nth-of-type(2){
                        font-family: 'Poppins', sans-serif;
                        font-size: 12px;
                        font-weight: 700;
                        color: #2E2D33;
                        margin-bottom: 10px;
                        margin-left: 10px;
                    }

                    >div:nth-of-type(1){
                        width: 25px;
                        height: 25px;
                        border-radius: 5px;
                        background-color: green;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 50px;
                        margin-left: 10px;

                        >p{
                            font-family: 'Poppins', sans-serif;
                            font-size: 12px;
                            font-weight: 700;
                            color: white;
                        }
                    }

                    >div:nth-of-type(2){
                        width: auto;
                        height: auto;
                        background-color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-left: 10px;

                        >div{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin-right: 15px;
                            flex-wrap: wrap;

                            >img{
                                width:10px;
                                height: 10px;
                                object-fit: cover;
                                margin-bottom: 5px;
                            }

                            >p{
                                width: auto;
                                font-family: 'Poppins', sans-serif;
                                font-size: 12px;
                                font-weight: 700;
                                text-align: center;
                            }
                        }
                    }
                }

                >div:nth-of-type(2){
                    width: 170px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    >p:nth-of-type(1){
                        font-family: 'Poppins', sans-serif;
                        font-size: 12px;
                        font-weight: 700;
                        color: #2E2D33;
                        margin-bottom: 5px;
                    }

                    >p:nth-of-type(2){
                        font-family: 'Poppins', sans-serif;
                        font-size: 20px;
                        font-weight: 700;
                        color: #2E2D33;
                        margin-bottom: 20px;
                    }

                    >button{
                        width: 130px;
                        height: 35px;
                        background-color: #223F9D;
                        border-radius: 15px;
                        color: white;
                        border: none;
                        font-family: 'Poppins', sans-serif;
                        font-size: 12px;
                        font-weight: 700;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;