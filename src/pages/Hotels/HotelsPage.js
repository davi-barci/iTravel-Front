import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai";
import slideImages from "../../constants/SlideImages";
import { useEffect, useRef } from "react";

export default function HotelsPage(){

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
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();

        const handlePageRefresh = () => {
          window.scrollTo(0, 0);
        };
    
        window.addEventListener("beforeunload", handlePageRefresh);
    
        return () => {
          window.removeEventListener("beforeunload", handlePageRefresh);
        };
    }, []);

    return(
        <ContainerHotels>
            <div>
                <AiOutlineArrowLeft/>
                <p>Voltar</p>
            </div>

            <div>
                <swiper-container ref={swiperRef} init="false">
                    {slideImages.map((imagem, index) => 
                        <swiper-slide key={index}>
                                <img src={imagem} alt="Slide"/>
                        </swiper-slide>
                    )}
                </swiper-container>

                <div>
                    <div>
                        <div>
                            <p>Hotel Nacional do Rio de Janeiro</p>
                            <p>Rio de Janeiro, Brasil. A 11,16 km do centro</p>
                        </div>
                        <p>Preço Diária: R$ 2000</p>
                    </div>
                    <div>
                        <div>
                            <p>8.3</p>
                        </div>
                        <div>
                            <p>Muito Bom</p>
                            <p>75 reviews</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <p>A hospedagem oferece</p>
                    <div>

                    </div>
                </div>

                <div>
                    <p>Conheça um pouco mais</p>
                    <p>
                    O icônico Hotel Nacional Rio de Janeiro, patrimônio histórico da humanidade 
                    e símbolo da arquitetura brasileira, foi projetado por Oscar Niemeyer e os 
                    jardins por Burle Marx, em frente ao mar de São Conrado. Possui localização 
                    estratégica com fácil acesso à praia, aeroportos, shopping e principais 
                    pontos de lazer da Cidade Maravilhosa, entre a Pedra da Gávea e o Morro 
                    Dois Irmãos. Oferece piscina ao ar livre o ano todo, wi-fi grátis nas áreas 
                    comuns e serviço de spa e sauna com custo adicional. 
                    Importante saber: acessível para pessoas com mobilidade reduzida, 
                    unidades adaptadas disponíveis, animais de estimação não permitidos e 
                    quartos com janelas fixas para manter a climatização. A hospedagem serve 
                    diariamente café da manhã e dispõe de bar. Os funcionários fornecem serviço 
                    de quarto. Destacam-se também serviços como massagem, estacionamento limitado, 
                    academia e recepção 24h. Os hóspedes podem aproveitar depósito de bagagem grátis, 
                    piscina infantil e, mediante custo extra, serviços de lavanderia e lavagem a seco.
                    </p>
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
                background-color: black;
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


