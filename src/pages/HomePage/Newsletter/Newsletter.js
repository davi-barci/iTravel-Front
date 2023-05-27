import styled from "styled-components";

export default function Newsletter(){
    return(
        <ContainerNewsletter>
            <p>Subcribe to our Newsletter</p>
            <p>Nossa Newsletter é a maneira perfeita de se manter atualizado(a) sobre as últimas ofertas de <br/>
            passagens aéreas e promoções de hospedagens. Ao se inscrever, você receberá em primeira mão <br/> 
            as melhores oportunidades de viagem diretamente na sua caixa de entrada. </p>
            <div>
            <input placeholder="Enter email address"/>
            <button>Inscrever-se</button>
            </div>
        </ContainerNewsletter>
    );
}

const ContainerNewsletter = styled.div`
    width: 100%;
    height: 460px;
    background: rgb(46,189,196);
    background: linear-gradient(90deg, rgba(46,189,196,1) 0%, rgba(104,229,178,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >p:nth-of-type(1){
        width: 100%;
        font-family: 'Poppins', sans-serif;
        color: white;        width: 100%;
        font-family: 'Poppins', sans-serif;
        color: white;
        font-size: 40px;
        text-align: center;
        margin-bottom: 40px;
        font-size: 40px;
        text-align: center;
        margin-bottom: 40px;
    }

    >p:nth-of-type(2){
        width: 100%;
        font-family: 'Poppins', sans-serif;
        color: white;
        font-size: 13px;
        text-align: center;
        margin-bottom: 60px;
    }

    >div{
        width: 100%;
        height: 52px;
        display: flex;
        justify-content: center;

        >input{
            width: 300px;
            height: 100%;
            background: transparent;
            border: 1px solid white;
            color: white;
            padding-left: 15px;
            font-size: 16px;
            box-sizing: border-box;

            ::placeholder{
            color: white;
            font-size: 16px;
            }

            :focus{
            outline: none
            }
        }

        >button{
            width: 115px;
            height: 100%;
            background: transparent;
            border: 1px solid white;
            color: white;
            font-size: 16px;
        }
    }

`;