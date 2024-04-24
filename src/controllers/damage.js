import { QueryTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const totalDamage = async (req, res) => {
  const { fecha_inicio, fecha_fin, type } = req.params;

  //Validacion tipo accidente
  if (type != "h" && type != "m" && type != "d") {
    return res.status(400).json({
      message: "El tipo de accidente no es correcto",
    });
  }
  console.log(fecha_inicio);
  const damage = await sequelize.query(
    `SELECT DISTINCT quipux.accidentes.nro_croquis, quipux.accidentes.gravedad,
    quipux.accidentes.fecha_radica,quipux.accidentes.fecha_accidente,quipux.accidentes.direccion_lugar, 
    quipux.accidentes.coordenada_x, quipux.accidentes.coordenada_y 
    FROM quipux.accidentes 
    INNER JOIN quipux.tipo_clase_accidente 
    ON quipux.accidentes.clase_accidente = quipux.tipo_clase_accidente.id_clase_accidente 
    INNER JOIN quipux.accidentes_vehiculos ON quipux.accidentes.nro_radicado = quipux.accidentes_vehiculos.nro_radicado 
    WHERE fecha_accidente BETWEEN TO_DATE(:fecha_inicio, 'YYYY/MM/DD') AND TO_DATE(:fecha_fin, 'YYYY/MM/DD') AND GRAVEDAD  = :type
    AND quipux.accidentes.coordenada_x IS NOT NULL AND quipux.accidentes.coordenada_y IS NOT NULL
    ORDER BY 3 asc;`,
    {
      replacements: { fecha_inicio, fecha_fin, type },
      type: QueryTypes.SELECT,
    }
  );

  res.status(200).json(damage);
};
