import styled from "styled-components";

export default function Tutorial(){
    return(
        <ContainerTutorial>
            <div>
            <div>
                <div>
                <p>01</p>
                </div>
            </div>

            <p>
                Escolha a cidade que <br/> 
                deseja visitar
            </p>
            </div>

            <div>
            <div>
                <div>
                <p>02</p>
                </div>
            </div>

            <p>
                Veja as passagens disponíveis, <br/> 
                com preços e datas
            </p>
            </div>

            <div>
            <div>
                <div>
                <p>03</p>
                </div>
            </div>

            <p>
                Veja os locais aonde você  <br/> 
                pode se hospedar e todo o <br/> 
                conforto que eles oferecem
            </p>
            </div>
        </ContainerTutorial>
    );
}

const ContainerTutorial = styled.div`
    width: 100%;
    height: 500px;
    background-color: white;
    display: flex; 
    align-items: center;
    justify-content: space-around;

    >div{
        width: 300px;
        height: 300px;
        background: #fefff0;
        box-shadow: 5px 5px 10px #666660, -5px -5px 10px #fffefe;
        border-bottom-left-radius: 40%;
        border-top-right-radius: 40%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        >div:nth-of-type(1){
          width: 120px;
          height: 120px;
          background-color: #2A95AE;
          box-shadow: 5px 5px 10px #bbbbb2, -8px -8px 10px #ffffff;
          border-bottom-right-radius: 85px;
          border-top-left-radius: 20px;
          position: absolute;
          top:0px;
          left: 0px;

          >div{
            width: 105px;
            height: 105px;
            border-radius: 50%;
            background-color: #fefff0;
            box-shadow: 5px 5px 10px #2A95AE, -5px -5px 10px #f3f0f0;
            position: relative;
            top: -20px;
            left: -20px;

            >p{
              text-align: center;
              padding-top: 30px;
              font-family: 'Poppins', sans-serif;
              color: #2A95AE;
              font-size: 45px;
            }
          }
        }

        >p{
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            color: #2A95AE;
            font-size: 20px;
            text-align: center;
            margin-top: 40px;
        }
    }
`;