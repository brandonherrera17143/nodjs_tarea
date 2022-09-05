import express  from "express" // si no se utiliza type mode se deberia de declarar como const express = require('express');
import { crud_estudiante } from "./controlador/crud_estudiantes.js"
//Paso 7


//Paso 1
const app_e = express() // crear variable para acceder al expressjs
app_e.use(express.urlencoded({extended:false}));
app_e.use(express.json());
app_e.use(express.static('./vistas'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))
app_e.set('views','./vistas')
app_e.set('view engine','ejs')
app_e.listen('5000',function(){
    console.log('Aplicacion Iniciada : http://localhost:5000/')
})
app_e.get('/',crud_estudiante.leer);
app_e.post('/crud_c',crud_estudiante.cud);