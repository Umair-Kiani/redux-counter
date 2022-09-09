import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import React from 'react'
import './App.css'
import MyCounter from './features/counter/Index'

const GRID = styled(Grid)`
justify-content: center;
align-items: center;
text-align: center;
`;

const App = () => {
  return (
    <div container>
    
      <GRID container>
        <Grid item xs={12}> <h1>Redux Counter</h1> </Grid>
         <Grid item xs={12}> <MyCounter /> </Grid>
      
      </GRID>
     
    </div>
  )
}

export default App