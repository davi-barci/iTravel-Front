import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai";

export default function FlightPage(){
    return(
        <ContainerFlightPage>
            <div>
                <AiOutlineArrowLeft/>
                <p>Voltar</p>
            </div>

            <div>
                <img src="https://www.fab.mil.br/sis/enoticias/imagens/original/42267/SID_RNP_AR_1.JPG"/>
                <div>
                    <div>
                        <div>
                            <img src="https://br.staticontent.com/flights-images/21.94.2/common/airlines/25x25/L0.png"/>
                            <p>LATAM</p>
                            <div>
                                <p>7.1</p>
                            </div>
                        </div>

                        <p>R$ 530</p>
                    </div>

                    <div>
                        <div>
                            <p>28/05/23</p>
                            <p>15:00</p>
                            <p>GRU</p>
                            <p>São Paulo</p>
                            <p>Aeroporto Internacional Guarulhos</p>
                        </div>
                        <div>
                            <p>Duração</p>
                            <p>1h 15m</p>
                        </div>
                        <div>
                            <p>28/05/23</p>
                            <p>16:15</p>
                            <p>SDU</p>
                            <p>Rio de Janeiro</p>
                            <p>Aeroporto Santos Dumont</p>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerFlightPage>
    );
}

const ContainerFlightPage = styled.div`
    width: 100%;
    min-height: 700px;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 80px;

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
        width: 700px;
        height: 600px;
        background-color: white;
        -webkit-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
        box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
        border-radius: 15px;
        display: flex;
        flex-direction: column;

        >img{
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;
        }

        >div:nth-of-type(1){
            width: 100%;
            height: 300px;
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #CCCCCC;

            >div:nth-of-type(1){
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 50px;
                border-bottom: 1px solid #CCCCCC;

                >div:nth-of-type(1){
                    display: flex;
                    align-items: center;
                    margin-left: 20px;
                    gap: 0px 10px;

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

                    >div:nth-of-type(1){
                        width: 30px;
                        height: 30px;
                        background-color: green;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        >p{
                            font-family: 'Poppins', sans-serif;
                            font-size: 14px;
                            font-weight: 700;
                            color: white;
                        }
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
                width: 100%;
                height: 250px;
                display: flex;

                >div:nth-of-type(1){
                    width: 300px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px 0px;
                    border-right: 1px solid #CCCCCC;

                    >p:nth-of-type(1){
                        font-family: 'Poppins', sans-serif;
                        font-size: 13px;
                        font-weight: 700;
                        color: #2E2D33;
                    }

                    >p:nth-of-type(2){
                        font-family: 'Poppins', sans-serif;
                        font-size: 18px;
                        font-weight: 700;
                        color: #2E2D33;
                    }

                    >p:nth-of-type(3){
                        font-family: 'Poppins', sans-serif;
                        font-size: 15px;
                        font-weight: 700;
                        color: #2E2D33;
                    }

                    >p:nth-of-type(4){
                        font-family: 'Poppins', sans-serif;
                        font-size: 12px;
                        font-weight: 700;
                        color: #2E2D33;
                    }

                    >p:nth-of-type(5){
                        font-family: 'Poppins', sans-serif;
                        font-size: 12px;
                        font-weight: 700;
                        color: #2E2D33;
                    }
                }

                >div:nth-of-type(2){
                    width: 100px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 5px 0px;
                    border-right: 1px solid #CCCCCC;

                    >p{
                        font-family: 'Poppins', sans-serif;
                        font-size: 13px;
                        font-weight: 700;
                        color: #42A791;
                    }
                }

                >div:nth-of-type(3){
                    width: 300px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px 0px;

                    >p:nth-of-type(1){
                        font-family: 'Poppins', sans-serif;
                        font-size: 13px;
                        font-weight: 700;
                        color: #2E2D33;
                    }

                    >p:nth-of-type(2){
                        font-family: 'Poppins', sans-serif;
                        font-size: 18px;
                        font-weight: 700;
                        color: #2E2D33;
                    }

                    >p:nth-of-type(3){
                        font-family: 'Poppins', sans-serif;
                        font-size: 15px;
                        font-weight: 700;
                        color: #2E2D33;
                    }

                    >p:nth-of-type(4){
                        font-family: 'Poppins', sans-serif;
                        font-size: 12px;
                        font-weight: 700;
                        color: #2E2D33;
                    }

                    >p:nth-of-type(5){
                        font-family: 'Poppins', sans-serif;
                        font-size: 12px;
                        font-weight: 700;
                        color: #2E2D33;
                    }
                }
            }
        }

    }
`;