import styled from "styled-components";
import BgFooter from "../../assets/bg_footer.png";
import {BsFacebook, BsInstagram, BsTwitter, BsTiktok, BsPinterest} from "react-icons/bs";

export default function Footer(){
    return(
        <ContainerFooter>
            <div>
                <p>iTravel</p>
                <p>
                    Engineering made in Brazil 🇧🇷 <br/>
                    iTravel © 2023 All Right Reserved <br/>
                    Terms of Service | Privacy Policy
                </p>
            </div>

            <div>
                <p>Follow us on</p>
                <div>
                    <div><BsFacebook/></div>
                    <div><BsInstagram/></div>
                    <div><BsTwitter/></div>
                    <div><BsTiktok/></div>
                    <div><BsPinterest/></div>
                </div>
            </div>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    width: 100%;
    height: 200px;
    background-color: #14161c;
    background-image: url(${BgFooter});
    background-size: cover;
    background-position: center;
    background-repeat: repeat-x;
    animation: slide 100s linear infinite;
    @keyframes slide {
        0%    { background-position: 0px 0px }
        100%  { background-position: 1920px 0px }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;

    >div:nth-of-type(1){
        display: flex;
        align-items: center;
        height: 100%;
        gap: 0px 20px;
        margin-left: 85px;

        >p:nth-of-type(1){
            font-family: 'Poppins', sans-serif;
            font-size: 30px;
            font-weight: 700;
            color: #FFFFFF;
        }

        >p:nth-of-type(2){
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            color: #FFFFFF;
            line-height: 25px;
        }
    }

    >div:nth-of-type(2){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 85px;

        >p{
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: #FFFFFF;
            margin-bottom: 15px;
        }

        >div{
            display: flex;
            align-items: center;
            gap: 0px 15px;

            >div{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                >svg{
                    font-size: 20px;
                }

                :hover{
                    background-color: #59E0CE;
                }
            }
        }
    }


`;