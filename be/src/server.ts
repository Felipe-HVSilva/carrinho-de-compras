import fastify from 'fastify'
import { productsRoutes } from './routes/products'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors)

app.register(productsRoutes)

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
