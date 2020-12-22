import React from 'react';
import Graph from './Graph';
import styled from 'styled-components'

const Graphs: React.FC = () => {

  return (
    <Styled>
      <Graph
        title="Foot Fall"
        figure="13k"
        sub="patients"
        data={[25, 36, 40, 35, 37, 47, 54]}
        color="#43d39e"
        trend={{
          textClass: 'text-success',
          icon: 'uil uil-arrow-up',
          value: '+0,2'
        }}/>
      <Graph
        title="Patient Satisfaction"
        figure="7.8"
        sub="nps"
        data={[25, 56, 70, 65, 56, 47, 42]}
        color="#ff0000"
        trend={{
          textClass: 'text-danger',
          icon: 'uil uil-arrow-up',
          value: '-0,1'
        }}/>
      <Graph
        title="Revenue"
        figure="4.2m"
        sub="Kenya Shillings"
        data={[25, 36, 40, 35, 37, 47, 54]}
        color="#43d39e"
        trend={{
          textClass: 'text-success',
          icon: 'uil uil-arrow-up',
          value: '+2,4'
        }}/>
    </Styled>
  );
};

export default Graphs;

const Styled = styled.div`
  width: 100%;
  margin-top: 30px;
  display: inline-block;
  box-sizing: border-box;
  & > * {
    width: 32%;
    margin-left: 2%;
    float: left;
    box-sizing: border-box;
    :first-child {
      margin-left: 0;
    }
  }
  @media (max-width: 1200px) {
    margin-right: 2%;
    & > * {
      width: 100%;
      margin-top: 30px;
      margin-left: 0;
      :first-child{
        margin-top: 0;
      }
    }
  }
`