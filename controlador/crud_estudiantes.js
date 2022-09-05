import { conectar } from "../modelo/db_conectar.js";

var crud_estudiante =({});
crud_estudiante.leer = (req,res)=>{
    conectar.query('SELECT estudiantes.id_estudiantes,estudiantes.carne,estudiantes.nombre,estudiantes.apellido,estudiantes.direccion,estudiantes.telefono,estudiantes.correo_electronico, DATE_FORMAT(estudiantes.fecha_nacimiento,"%d-%m-%Y") as fecha_nacimiento FROM estudiantes;',(error,results)=>{
        if (error){
            throw error;

    }else{
    res.render('estudiante/index',{resultado:results})
    }
})
};
crud_estudiante.cud = (req,res)=>{
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;

    const id_estudiantes = req.body.txt_id;
    const carne = req.body.txt_carne;
    const nombre = req.body.txt_nombres;
    const apellido = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo_electronico = req.body.txt_correo;
    const fecha_nacimiento = req.body.txt_fn;
  
    if (btn_crear){
        conectar.query('insert into estudiantes set ?',{carne:carne,nombre:nombre,apellido:apellido,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,fecha_nacimiento:fecha_nacimiento}, (error, results)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/');         
            }
        });
       
    }
    if (btn_actualizar){
        conectar.query('update estudiantes set ? where id_estudiantes = ?',[{carne:carne,nombre:nombre,apellido:apellido,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,fecha_nacimiento:fecha_nacimiento},id_estudiantes], (error, results)=>{
            if(error){
                console.log(error);
            }else{   
                res.redirect('/');         
            }
        });
       
    }
    if (btn_borrar){
        conectar.query('delete from estudiantes where id_estudiantes = ?',[id_estudiantes], (error, results)=>{
            if(error){
                console.log(error);
            }else{   
                res.redirect('/');         
            }
        });      
    }    
};

export {crud_estudiante}
