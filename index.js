import express from 'express';
import cors from 'cors';

const app = express();

app.set('port',  process.env.PORT || 4000);
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto ' +app.get('port'))
});


app.use(cors());
app.use(express.json());