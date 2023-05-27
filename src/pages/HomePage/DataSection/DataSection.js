import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BgBeach from "../../../assets/bg_beach.jpg";
import {BsAirplaneFill, BsFillBuildingsFill} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa";

export default function DataSection(){
    const NumberCounter = ({ end }) => {
        const [number, setNumber] = useState(0);
        const duration = Math.floor(1000 / end);
        const elementRef = useRef(null);
        const observerRef = useRef(null);
        const counterRef = useRef(null);
      
        useEffect(() => {
          const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
              counterRef.current = setInterval(() => {
                setNumber((prevNumber) => {
                  console.log(prevNumber)
                  if (prevNumber >= end) {
                    clearInterval(counterRef.current);
                    return prevNumber;
                  }
                  return prevNumber + 1;
                });
              }, duration);
            } else {
              clearInterval(counterRef.current);
            }
          });
      
          observerRef.current = observer;
      
          return () => {
            clearInterval(counterRef.current);
          };
        }, []);
      
        useEffect(() => {
          if (elementRef.current && observerRef.current) {
            observerRef.current.observe(elementRef.current);
          }
      
          return () => {
            if (elementRef.current && observerRef.current) {
              observerRef.current.unobserve(elementRef.current);
            }
          };
        }, [end]);
      
        return <p ref={elementRef}>{number}</p>;
      };

      return(
        <ContainerDataSection>
            <div>
                <div>
                    <BsAirplaneFill/>
                </div>
                <NumberCounter end={360}/>
                <p>Passagens Aéreas</p>
            </div>

            <div>
                <div>
                    <FaMapMarkerAlt/>
                </div>
                <NumberCounter end={20}/>
                <p>Destinos Incríveis</p>
            </div>

            <div>
                <div>
                    <BsFillBuildingsFill/>
                </div>
                <NumberCounter end={300}/>
                <p>Opções de Hospedagem</p>
            </div>
        </ContainerDataSection>
      );
}

const ContainerDataSection = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url(${BgBeach});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(15, 36, 84, 0.6);
    }

    >div{
        width: 240px;
        height: 210px;
        display: flex;
        flex-direction: column;
        align-items: center;
    
        >div{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: rgba(255,255,255,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;

            >svg{
            color:white;
            font-size: 40px;
            z-index: 1;
            }  
        }

        >p:nth-of-type(1){
            font-family: 'Poppins', sans-serif;
            margin-bottom: 10px;
            font-size: 36px;
            color: white;
            z-index: 2;
        }

        >p:nth-of-type(2){
            font-family: 'Poppins', sans-serif;
            margin-bottom: 10px;
            font-size: 16px;
            color: white;
            z-index: 2;
        }
    }
`;