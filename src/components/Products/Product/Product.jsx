import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconBotton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

const Product = () => {
  return (
      <Card className = {classes.root}>
          <CardMedia className = {classes.media} image='' title = {product.name} />
      </Card>
  )
}

export default Product