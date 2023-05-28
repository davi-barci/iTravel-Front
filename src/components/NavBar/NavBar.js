import styled from "styled-components";
import { BsGlobe } from "react-icons/bs";
import BrazilFlag from "../../assets/brazil_flag.png";
import { useLocation } from 'react-router-dom';

export default function NavBar(){
    const location = useLocation();

    return (
        <ContainerNavBar pathname={location.pathname}>
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
    background: ${(props) => (props.pathname === '/' ? 'transparent' : '#2A95AE')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    z-index: 10;

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