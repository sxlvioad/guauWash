const pool = require('../bd');

async function eliminarProductoPorId(id){
    try{
        let query = "delete from tienda where id_p = ?";
        let rows = await pool.query(query,id);
        return rows;
    } catch(error) {
        throw error;
    }
}

// select * from noticia order by id_n desc
async function getProductosAdmin() {
    try {
        // select * from noticia as n join autor as a on n.id_autor = a.id
        let query = "select * from tienda";
        let rows = await pool.query(query);
        // noticia + id, nombre, apellido
        console.log(rows);
        return rows;
    } catch(error){
        throw error;
    }
}

async function crearProducto(obj) {
    try {
        let query = "insert into tienda set ?";
        let rows = await pool.query(query,obj);
        return rows;
    } catch(error) {
        throw error;
    }

}
module.exports = {crearProducto,getProductosAdmin, eliminarProductoPorId}