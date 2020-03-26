const pool = require('../bd');

async function getProductos() {
    try {
        // DATE_FORMAT(fecha_creacion,"%d/%m/%Y") as fecha
        let consulta =  "select * from tienda";
        // rows contiene el resultado de la consulta (array de objetos)
        let rows =  await pool.query(consulta);
        return rows;
    } catch(error) {
        console.log(error);
    }

}

async function getProducto(id) {
    // solo las funciones async tienen bloque try ´catch
    try {
        let query = "select * from tienda where id_p = ?";
        let rows = await pool.query(query,[id]);
        return rows; 
    } catch(error){
        console.log(error);
    }

}




module.exports={getProductos, getProducto}