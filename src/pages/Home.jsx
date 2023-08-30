import React from 'react'
import Navbar from  '../components/Navbar'
import PokemonCard from  '../components/PokemonCard'
import { Container, Grid } from '@mui/material'
import axios from 'axios'

export const Home = () => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
  return (
    <div>
      <Navbar/>
      <Container maxWidth='false' >
        <Grid container>
          <Grid item xs={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={3}>
            <PokemonCard/>
          </Grid>
          <Grid item xs={3}>
            <PokemonCard/>
          </Grid>
        </Grid>
        
      </Container>
      
    </div>
  )
}
