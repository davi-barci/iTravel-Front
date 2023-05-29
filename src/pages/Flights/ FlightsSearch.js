import styled from "styled-components";
import {BsAirplaneFill, BsFillBuildingsFill} from "react-icons/bs";
import { useEffect, useState } from "react";
import CitiesContext from "../../contexts/CitiesContext.js";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from 'dayjs';
import FlightsContext from "../../contexts/FlightsContext.js";

export default function FlightsSearch(){
    const {originCity, setOriginCity, destinationCity, 
    setDestinationCity, minValueFlight, setMinValueFlight, 
    maxValueFlight, setMaxValueFlight} = useContext(FlightsContext);
    const {cities} = useContext(CitiesContext);
    const { cidadeOrigem, cidadeDestino } = useParams();
    const [flights, setFlights] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        
        if(minValueFlight >= maxValueFlight){
            alert("O valor mínimo deve ser menor que o valor máximo...");
            return
        }else{
            navigate(`/flights/${originCity}/${destinationCity}`);
        }
    }

    useEffect(() => {
       axios
      .get(`${process.env.REACT_APP_API_URL}/flights/${cidadeOrigem}/${cidadeDestino}`, {
        params: {
          maxValue: maxValueFlight,
          minValue: minValueFlight
        }
        })
      .then((res) => {
        setFlights(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      setOriginCity(cidadeOrigem);
      setDestinationCity(cidadeDestino);
    }, [cidadeOrigem, cidadeDestino, maxValueFlight, minValueFlight]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <ContainerFlight>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Passagens Aéreas</label>
                    <label>Origem</label>
                    <select name="origin" value={originCity.toString()} onChange={(e) => setOriginCity(Number(e.target.value))}>
                        <option value="0">Qualquer</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.id.toString()}>{city.name}</option>
                        ))}
                    </select>
                    <label>Destino</label>
                    <select name="destination" value={destinationCity.toString()} onChange={(e) => setDestinationCity(Number(e.target.value))}>
                        {cities.map((city) => (
                            <option key={city.id} value={city.id.toString()}>{city.name}</option>
                        ))}
                    </select>
                    <div>
                        <label>Preço Mínimo</label>
                        <label>R$ {minValueFlight}</label>
                    </div>
                    <input type="range" min="0" max="10000" step="50" value={minValueFlight} onChange={(e) => setMinValueFlight(e.target.value)}/>
                    <div>
                        <label>Preço Máximo</label>
                        <label>R$ {maxValueFlight}</label>
                    </div>
                    <input type="range" min="0" max="10000" step="50" value={maxValueFlight} onChange={(e) => setMaxValueFlight(e.target.value)}/>
                    <button type="submit">Procurar</button>
                </form>
            </div>

            <div>
                <div>
                    <div>
                        <BsAirplaneFill/>
                    </div>

                    <div>
                        <BsFillBuildingsFill/>
                    </div>
                </div>

                {(flights.length === 0) ?
                    <p>Infelizmente, não encontramos nenhum vôo com esses parâmetros 😢</p>
                    :
                    <div>
                        {flights.map((flight) => (
                            <div>
                                <div>
                                    <div>
                                        <img src={flight.airlinelogo}/>
                                        <p>{flight.airline}</p>
                                    </div>
                                    <div>
                                        <p>{dayjs(flight.outputForecast).format('DD/MM/YYYY')}</p>
                                        <p>{dayjs(flight.outputForecast).format("HH:mm")}</p>
                                        <p>{flight.originairportacronym}</p>
                                        <p>{flight.origincity}</p>
                                    </div>
                                    <div>
                                        <p>Duração</p>
                                        <p>{`${Math.floor(dayjs(flight.arrivalForecast).diff(dayjs(flight.outputForecast), 'minute') / 60)}h ${Math.floor(dayjs(flight.arrivalForecast).diff(dayjs(flight.outputForecast), 'minute') % 60)}m`}</p>
                                    </div>
                                    <div>
                                        <p>{dayjs(flight.arrivalForecast).format("DD/MM/YYYY")}</p>
                                        <p>{dayjs(flight.arrivalForecast).format("HH:mm")}</p>
                                        <p>{flight.destinationairportacronym}</p>
                                        <p>{flight.destinationcity}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Preço</p>
                                    <p>{`R$ ${flight.price}`}</p>
                                    <button onClick={() => navigate(`/flights/${flight.id}`)}>Ver Mais</button>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </ContainerFlight>
    );
}

const ContainerFlight = styled.div`
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
                background-color: #2A95AE;
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
                    color: white;
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
                background-color: white;
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
                    color: grey;
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
                height: 160px;
                background-color: white;
                border-radius: 15px;
                display: flex;

                :hover{
                    -webkit-box-shadow: 10px 10px 3px -8px rgba(0,0,0,0.3);
                    -moz-box-shadow: 10px 10px 3px -8px rgba(0,0,0,0.3);
                    box-shadow: 10px 10px 3px -8px rgba(0,0,0,0.3);
                }

                >div:nth-of-type(1){
                    width: 600px;
                    height: 100%;
                    background-color: #e3e8f2;
                    border-right: 4px dashed #CCCCCC;
                    --mask: radial-gradient(20px at 100% 20px,#0000 98%,#000) 0 -20px;
                    -webkit-mask: var(--mask);
                    mask: var(--mask);
                    display: flex;
                    
                    >div:nth-of-type(1){
                        display: flex;
                        flex-direction: column;
                        gap: 20px 0px;
                        justify-content: center;
                        align-items: center;
                        width: 150px;
                        height: 100%;
                        border-right: 1px solid #CCCCCC;

                        >img{
                            width: 30px;
                            height: 30px;
                            object-fit: cover;
                        }

                        >p{
                            font-family: 'Poppins', sans-serif;
                            font-size: 16px;
                            font-weight: 700;
                            color: #2E2D33;
                        }
                    }

                    >div:nth-of-type(2){
                        display: flex;
                        flex-direction: column;
                        gap: 20px 0px;
                        justify-content: center;
                        align-items: center;
                        width: 150px;
                        height: 100%;

                        >p{
                            font-family: 'Poppins', sans-serif;
                            font-size: 14px;
                            font-weight: 700;
                            color: #2E2D33;
                        }
                    }

                    >div:nth-of-type(3){
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 150px;
                        height: 100%;
                        gap: 10px 0px;

                        >p{
                            color: #42A791;
                            font-family: 'Poppins', sans-serif;
                            font-size: 14px;
                            font-weight: 700;
                        }
                    }

                    >div:nth-of-type(4){
                        display: flex;
                        flex-direction: column;
                        gap: 20px 0px;
                        justify-content: center;
                        align-items: center;
                        width: 150px;
                        height: 100%;

                        >p{
                            font-family: 'Poppins', sans-serif;
                            font-size: 14px;
                            font-weight: 700;
                            color: #2E2D33;
                        }
                    }
                }

                >div:nth-of-type(2){
                    width: 220px;
                    height: 100%;
                    background-color: #e3e8f2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    --mask: radial-gradient(20px at 0 20px,#0000 98%, #F5F7FB) 0 -20px;
                    -webkit-mask: var(--mask);
                            mask: var(--mask);

                    >p:nth-of-type(1){
                        font-family: 'Poppins', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #2E2D33;
                        margin-bottom: 5px;
                    }

                    >p:nth-of-type(2){
                        font-family: 'Poppins', sans-serif;
                        font-size: 20px;
                        font-weight: 700;
                        color: #2E2D33;
                        margin-bottom: 25px;
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