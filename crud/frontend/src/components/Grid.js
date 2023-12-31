import React from "react";
import styled from "styled-components";
import axios from "axios";
import {FaTrash, FaEdit} from "react-icons/fa";
import { toast } from "react-toastify";


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding:20px;
    box-shadow:0px 0px 5px #ccc;
    border-radius:5px;
    max-width :800px;
    margin : 20px auto;
    word-break:break-all;
`;
export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Th = styled.th`
    text-align : start;
    border-botton: inset;
    padding-bottom:5px;

    @media (max-width : 500px)
    {
        ${
            (props) => props.onlyWeb && "display:none"
        }
    }

`;
export const Td = styled.td`
    text-align :${(props) => (props.alingCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};
    padding-top : 15px;

  

    @media (max-width : 500px)
    {
        ${
            (props) => props.onlyWeb && "display:none"
        }
    }

`;


const Grid = ({users})=>{
    return(
        <Table>
            <Thead>
             <Tr>Nome</Tr>
             <Tr>Email</Tr>
             <Tr onlyWeb>Fone</Tr>
             <Tr></Tr>
             <Tr></Tr>
            </Thead>
            <Thead>
                {users.map((item,i)=>(
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="20%" onlyWeb>{item.fone}</Td>
                        <Td alingCenter width="5%">
                            <FaEdit></FaEdit>
                        </Td>
                        <Td alingCenter width="5%">
                            <FaTrash onClick={()=> handleDelete(item.id)}/>
                        </Td>
                    </Tr>
                   
                ))}

            </Thead>
        </Table>
    );
};
export default Grid;