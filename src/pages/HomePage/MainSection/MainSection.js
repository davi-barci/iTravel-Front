import styled from "styled-components";
import slideImages from "../../../constants/SlideImages";
import { useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";

export default function MainSection(props){
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
          slidesPerView: 1,
          autoplay: {
            delay: 10000,
          },
          allowTouchMove: false,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          speed: 1500,
          loop: true,
          touch: false,
          injectStyles: [
              `
              @keyframes zoom {
                    from {
                        transform: scale(1.5);
                    }
                
                    to {
                        transform: scale(1);
                    }
                }
            

                .swiper-wrapper{
                  height: 100vh;
                }
  
                .swiper-slide-active img{
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                  animation-name: zoom;
                  animation-duration: 10s;
                  animation-fill-mode: forwards;
                }

                swiper-slide img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
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

      function handleSubmit(event) {
        event.preventDefault(); 
        const selectedCity = event.target.cities.value; 
   
        if (selectedCity !== "") {
          navigate(`flights/0/${selectedCity}}`);
        } 
      }

    return(
        <ContainerMainSection>
            <swiper-container ref={swiperRef} init="false">
                {slideImages.map((imagem, index) => 
                    <swiper-slide key={index}>
                            <img src={imagem} alt="Slide"/>
                    </swiper-slide>
                )}
            </swiper-container>

            <div>
                <p>Let's travel the world with us</p>
                <p>Explore The World <br/>
                With <span>iTravel</span></p>
                <div>
                    <form onSubmit={handleSubmit}>
                      <select name="cities" defaultValue="">
                          <option value="" disabled>Selecione o seu destino</option>
                          {props.cities.map((elem) => (
                            <option key={elem.id} value={elem.id}>{elem.name}</option>
                          ))}
                      </select>
                      <input type="submit" value="Buscar"/>
                    </form>
                </div>
            </div>
        </ContainerMainSection>
    );
}

const ContainerMainSection = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;

    >div{
        width: 100%;
        position: absolute;
        top: 230px;
        left: 0px;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;

        >p:nth-of-type(1){
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: #fff;
          letter-spacing: 6px;
          margin-bottom: 30px;
        }

        >p:nth-of-type(2){
          font-family: 'Poppins', sans-serif;
          font-size: 75px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          text-align: center;
          margin-bottom: 60px;

          >span{
            color: transparent;
            -webkit-text-stroke: 1px #fff;
          }
        }

        >div{
          width: 1116px;
          height: 70px;
          background-color: rgba(255,255,255,0.2);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          
          >form{
            width: 1076px;
            height: 50px;
            display: flex;

            >select{
              width: 806px;
              height: 100%;
              background-color: white;
              border: none;
              color: #676977;
              padding-left: 20px;
              font-size: 16px;

              :focus{
                outline: none;
              }
            }

            >input{
              width: 270px;
              height: 100%;
              background-color: #2095AE;
              color: white;
              border: none;
              font-size: 16px;
              cursor: pointer;
            }

          }
        }

    }
`;