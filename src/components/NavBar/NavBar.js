import styled from "styled-components";
import { BsGlobe } from "react-icons/bs";
import BrazilFlag from "../../assets/brazil_flag.png";

export default function NavBar(){
    return (
        <ContainerNavBar>
            <p>iTravel</p>
            <div>
                <img src={BrazilFlag} alt="Brazil Flag"/>
                <div>
                    <BsGlobe/>
                    <p>
                        PT
                    </p>
                </div>
                <p>
                    R$
                </p>
                <button>
                    Fale conosco
                </button>
            </div>
        </ContainerNavBar>
    );
}

const ContainerNavBar = styled.div`
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 80px;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    >p{
        font-family: 'Poppins', sans-serif;
        font-size: 30px;
        font-weight: 700;
        color: #FFFFFF;
        margin-left: 85px;
    }

    >div{
        display:flex;
        align-items: center;
        gap: 0px 20px;
        margin-right: 85px;

        img{
            width: 22px;
            height: 16px;
            cursor: pointer;
        }

        >div{
            display: flex;
            align-items: center;
            gap: 0px 5px;
            cursor: pointer;

            >svg{
                color: white;
            }
            >p{
                font-family: 'Poppins', sans-serif;
                font-size: 16px;
                font-weight: 700;
                color: #FFFFFF;
            }
        }

        >p{
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: #FFFFFF;
            cursor: pointer;
        }

        >button{
            width: 85px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            font-size: 10px;
            font-weight: 700;
            color: #FFFFFF;
            background: transparent;
            border: 1px solid white;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;