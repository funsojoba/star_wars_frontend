import styled from "styled-components";


export const MainBody = styled.div`
    width:100%;
`

export const HeaderDiv = styled.div`
    padding: 30px;
    background:#2B2B2B;
    border-radius: 24px;
    box-shadow: 11px 12px 32px rgba(0,0,0,.25);
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center
`

export const SelectDiv = styled.select`
        background:${props => props.background ? props.background : 'none'};
        border:${props => props.border ? props.border : "none"};
        color:#000;
        width: ${props => props.width ? props.width : "auto"};
        border-radius: 15px;
        padding: ${props => props.padding ? props.padding : "none"};
        outline:none;
`

export const Label = styled.label`
    display: inline-block;
    color:#FFE81F;
`