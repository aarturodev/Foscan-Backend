import {DataModel} from '../models/data.model.js';

export class DataController {

     static async getData(req, res) {
          try{
               const {troncal, linea, corrida} = req.params;
               const array = corrida.replace(/_/g, "/").split(',');

               const result = await DataModel.getData(troncal, linea, array);

               res.json(result);
               
          }catch (error) {
               console.log(error);
          }
     }
     static async getGraficas(req, res) {
          try{
               const {troncal, linea, corrida} = req.params;
               const array = corrida.replace(/_/g, "/").split(',');

               const result = await DataModel.getGraficas(troncal, linea, array);

               res.json(result);
               
          }catch (error) {
               console.log(error);
          }
     }
     
}