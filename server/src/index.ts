import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

// Middlewares
app.use(express.json())

app.get("/", (_res: Request, res: Response) => {
    res.send("App is running!")
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
