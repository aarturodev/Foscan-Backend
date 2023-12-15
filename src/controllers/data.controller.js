import { parse } from 'dotenv';
import {DataModel} from '../models/data.model.js';

export class DataController {

     static async getLinea(req, res) {
          try{
               const {troncal, linea, corrida} = req.params;
               if(troncal === 'Sur'){
                    const result = await getLineasDisponibles();
                    res.json(result);
               }
               if(corrida === 'todos'){
                    const result = await DataModel.getAll(troncal, linea);
                    res.json(result);
                    return;
               }
               
               const result = await DataModel.getLinea(troncal, linea, corrida);
               res.json(result);
          }catch (error) {
               console.log(error);
          }
     }

     static async getDataPrueba(req, res) {
          try{
               console.log(req.body);
          }catch (error) {
               console.log(error);
          }
     }
     
}