import styled from "styled-components"

export const Table = styled.table`
  position: relative;
  right: 20px;
  font-size: 12px;
  border-color: #9fa9bf;
  width: 103.3%;
  max-width: 103.3%;
  border-spacing:0;
`
export const THead = styled.thead`
    border-color: #9fa9bf;
    height: 50px;
    background-color: #9fa9bf;
`

export const TBody = styled.tbody`
    border-color: #9fa9bf;
    height: 100px;
    font-size: 14px;
    tr{
        text-align: center;
    }
    tr:nth-child(even) {
        background-color: #fff;
    }
    tr:nth-child(odd) {
        background-color: #f2f2f2;
    }
`
