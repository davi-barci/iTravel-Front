import {FiMapPin} from "react-icons/fi";
import MaldiveImg from "../../../assets/PopularDestinations/maldives.jpg";
import DubaiImg from "../../../assets/PopularDestinations/dubai.jpg";
import RioImg from "../../../assets/PopularDestinations/rio.jpg";
import ParisImg from "../../../assets/PopularDestinations/paris.jpg";
import NewYorkImg from "../../../assets/PopularDestinations/newyork.jpg";
import styled from "styled-components";

export default function TopDestination(){
    return(
        <ContainerTopDestination>
            <p>TOP DESTINATION</p>
            <p>POPULAR <span>DESTINATION</span></p>
            <div>

            <div>
                <img src={MaldiveImg}/>
                <div>
                <FiMapPin/>
                <p>ILHAS MALDIVAS</p>
                </div>
            </div>

            <div>
                <img src={DubaiImg}/>
                <div>
                <FiMapPin/>
                <p>DUBAI</p>
                </div>
            </div>

            </div>

            <div>
                <div>
                <img src={RioImg}/>
                <div>
                    <FiMapPin/>
                    <p>RIO DE JANEIRO</p>
                </div>
                </div>

                <div>
                <img src={ParisImg}/>
                <div>
                    <FiMapPin/>
                    <p>PARIS</p>
                </div>
                </div>

                <div>
                <img src={NewYorkImg}/>
                <div>
                    <FiMapPin/>
                    <p>NOVA IORQUE</p>
                </div>
                </div>
            </div>
        </ContainerTopDestination>
    );
}

const ContainerTopDestination = styled.div`
    width: 100%;
    height: 900px;
    background-color: #F4F5F8;
    padding-top: 120px;

    >p:nth-of-type(1){
        width: 1100px;
        color: #2095AE;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 13px;
        margin: 0px auto 25px auto;
    }

    >p:nth-of-type(2){
        width: 1100px;
        color: #0F2454;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 45px;
        margin: 0px auto 30px auto;

        >span{
            color: #2095AE;
        }
    }

    >div:nth-of-type(1){
        width: 1100px;
        height: 400px;
        display: flex;
        justify-content: space-between;
        margin: 0px auto 35px auto;


        >div:nth-of-type(1){
            width: 725px;
            height: 100%;
            background-color: green;
            position: relative;
            -webkit-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);
            overflow: hidden;
            cursor: pointer;

            >div{
                width: 100%;
                display: flex;
                position: absolute;
                bottom: 20px;
                left: 0px;

                >p{   
                    color: #fff;
                    font-family: 'Poppins', sans-serif;
                    font-size: 24px;
                    font-weight: 700;
                }

                >svg{
                    font-size: 24px;
                    color:#fff;
                    margin-left: 10px;
                    margin-right: 10px;
                }
            }
    }

    >div:nth-of-type(2){
        width: 350px;
        height: 100%;
        background-color: blue;
        position: relative;
        -webkit-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);
        overflow: hidden;
        cursor: pointer;

        >div{
            width: 100%;
            display: flex;
            position: absolute;
            bottom: 20px;
            left: 0px;

            >p{   
                color: #fff;
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                font-weight: 700;
            }

            >svg{
                font-size: 24px;
                color:#fff;
                margin-left: 10px;
                margin-right: 10px;
            }
            }
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: all 1.1s;

            :hover{
            transform: scale(1.2);
            }
        }
    }

    >div:nth-of-type(2){
        width: 1100px;
        height: 250px;
        display: flex;
        justify-content: space-between;
        margin: 0px auto 35px auto;

        >div{
            width: 350px;
            height: 100%;
            background-color: blue;
            position: relative;
            -webkit-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);
            overflow: hidden;
            cursor: pointer;

            >div{
            width: 100%;
            display: flex;
            position: absolute;
            bottom: 20px;
            left: 0px;

            >p{   
                color: #fff;
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                font-weight: 700;
            }

            >svg{
                font-size: 24px;
                color:#fff;
                margin-left: 10px;
                margin-right: 10px;
            }
            }
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 1.1s;

            :hover{
            transform: scale(1.2);
            }
        }
    }

`;