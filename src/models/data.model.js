import {getConnection} from "../database/conexion.js";

export class DataModel {
 
     static async getData(troncal, linea, corrida) {
          try {
               const pool = await getConnection();

               const query = `  
                    SELECT  línea as linea, 
                    "Corrida de referencia" as "corrida_ref", 
                    "Proveedor Corrida / Tipo / año" as "provedor_corrida",
                    "Diám/Espe" as "diam_espe",
                    "¿EMPAREJADO? SI / NO" as "emparejado",
                    "Distancia del reg. [m]" as distancia_reg,
                    "Distancia del reg. Referencia [m]" as distancia_reg_ref,
                    "Latitud N [decimales]" as latitud_n,
                    "Longitud W [decimales]" as longitud_w,
                    "Altura (m)" as altura,
                    "Tipo Evento" as tipo_evento,
                    "Identificación Evento" as identificacion_evento,
                    "Número Junta" as numero_junta,
                    "Diámetro (mm)" as diametro,
                    "t. Nominal (mm)" as t_nominal,
                    "Distancia del reg. J.A. corrida de referencia (m)" as distancia_reg_ja,
                    "P. Horaria (hh:mm)" as p_horaria,
                    "Long. (mm)" as long,
                    "Ancho (mm)" as ancho,
                    "Prof. (mm)" as prof,
                    "Prof/ def.D (%)" as prof_def_d,
                    "Pared INT / EXT" as pared_int_ext,
                    "Fecha de  Actualizacón" as fecha_actualizacion,
                    "Estado Intervención Activo/ Inspeccionada / Reparada" as estado_intervencion,
                    "Tipo Intervención / Camisa T.B / Compuesto / Desbaste / C&E / Recubrimiento / Liberación" as tipo_intervencion,
                    "Fecha Intervención" as fecha_intervencion,
                    "DR Inicio (m)" as dr_inicio,
                    "DR Fin [m]" as dr_fin,
                    "Longitud [m]" as longitud,
                    "OT Intervención" as ot_intervencion,
                    "Documento Soporte" as documento_soporte,
                    "OBSERVACIONES" as observaciones,
                    Troncal
                         FROM tabla_publicacion 
                    WHERE Troncal = '${troncal}' 
                         AND Línea = '${linea}'
                         AND "Corrida de referencia" IN (${corrida.map(value => `'${value}'`).join(',')})
                         ORDER BY "Distancia del reg. Referencia [m]" ASC`;

               const result = await pool.request().query(query);
               pool.close();

               return result.recordset;

          }catch (error) {
                console.log(error);
          }
     }
     static async getGraficas(troncal, linea, corrida) {
          try {
               const pool = await getConnection();

               const query = `  
                    SELECT  
                         "Distancia del reg. [m]" as distancia_reg,
                         "Distancia del reg. Referencia [m]" as distancia_reg_ref,
                         "Altura (m)" as altura,
                         "Diámetro (mm)" / "t. Nominal (mm)" as diamEspe

                    FROM tabla_publicacion 
                    WHERE Troncal = '${troncal}' 
                         AND Línea = '${linea}'
                         AND "Corrida de referencia" IN (${corrida.map(value => `'${value}'`).join(',')})
                         ORDER BY "Distancia del reg. Referencia [m]" ASC`;

               const result = await pool.request().query(query);
              pool.close();

               return result.recordset;

          }catch (error) {
                console.log(error);
          }
     }
}