const pool = require('../bd');

async function crearTurno(objTurno){
    try{
        let query ="insert into turno set ?";
        const rows = await pool.query(query,[objTurno]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

module.exports={crearTurno};