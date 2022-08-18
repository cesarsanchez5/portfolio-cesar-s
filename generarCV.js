

  function imprimirPdf(){


    var docDefinition = {
        content: [
           {
            text: ['CURRICULUM VITAE\n',
            '___________________________________________________________________\n\n',

          ],
            style: 'header',
            alignment: 'center'
          },
            {
            text: [
              
              'Ingeniero Mecanico Electricista\n',
              'Facultad de Ingeniería Mecánica y Eléctrica UANL (2003-2007)\n',
              'Desarrollador FrontEnd\n',
              'Julio César Sánchez Treviño\n',
            'Cel. 813-242-20-06\n',
             'Tel. casa 81-30-64-73-97\n',
             'cesarsanchez2824@gmail.com\n\n',
              

            ],
             
            
         } ,

         {
          text: ' LENGUAJES DE PROGRMACION \n',
          style: 'header'
        },
        {
          text: [
            
            ' Entorno de NodeJS: Javascript, React, CSS, HTML, Bootstrap\n',            
           ' \n',
        

          ],
        
          
       } ,

         ,
         {
          text: ' INFORMACION PERSONAL \n',
          style: 'header'
        },
        {
          text: [
            
            'Lugar de Nacimiento: Monterrey N.L.\n',            
           'Año de Nacimiento: 1983\n',
           '\n',

          ],         
       } ,
       
            {
              text: '  IDIOMAS\n',
              style: 'header'
              },
              {
                text: [
                  
                  'Ingles 70%\n',            
                ' \n',
       
                ],

                
              } ,

                        
          {
            text: ' HISTORIAL LABORAL\n',
            style: 'header'
          },
          {
            text: [
              
            'Jun/2021-Nov/2021\n',            
            'Compañia: Core Apps\n',
            'Colaboracion en proyecto: SelfService.\n',
            'Consumo de empleados, utilizando Javascript, css, HTML.\n',            
            'Elaboracion de componente side bar usandolo como medio de navegacion para\n',
            'renderizar los siguientes componentes:\n',
            'componente Home: mostraba links de capacitaciones y programas de la compañia\n',
            'componente Records: el usuario generaba de manera automatica carta constancia\n',
            'de salario, o renuncia, generadas en PDF con la libreria pdfMaker de javascript\n',
            'componente Datos: en donde se mostraba datos de usuario como id y nombre,\n',
            'consumiendo los datos desde BD de la compañia. \n',            
            ' Lic. Cynthia de la Garza\n',
            ' Tel: 81-19-70-70-00\n\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',
            '\n',

            ],            
          } ,
          {
            text: ' PROYECTOS ELABORADOS\n\n',
            style: 'header'
          },
          {
            text: [
               
                  
              {text: 'Clinica veterinaria: ', fontSize: 12, bold: true},
             'Control de citas de mascotas, crea, edita y elimina\n',            
            'citas, elaborado con Javascript, React, nodeJS, css, HTML, utilizando el orden\n',
            'recomendado por React elaborando componentes con funciones usando sintaxis JSX,\n',
            'usando los hooks comunes: useState, useEffect.\n',            
            '\n',
            'publicacion de proyecto en netlify:\n',
            {text: 'https://practical-williams-99944f.netlify.app/ \n\n', italics: true},
            
            'codigo fuente de repositorio:\n',
            {text: 'https://github.com/cesarsanchez5/vetrinaria_mi_mascota_citas.git \n', italics: true},
            
            '\n',
            '_________________________________________________________________________________\n',
            '\n\n',
            ],            
          } ,
      
          {
            text: [
              
            {text: 'Busqueda de empleados: ', fontSize: 12, bold: true},
            'Consumo de API jsonplaceholder, filtrado de\n',            
            'empleados buscados por nombre o correo, mostrando el valor de la busqueda.\n',
            'Elaborado con Javascript, React, nodeJS, css, bootstrap, HTML, utilizando el orden\n',
            'recomendado por React elaborando componentes con funciones usando sintaxis JSX,\n',
            'usando los hooks comunes: useState, useEffect. Axios para consumo de recursos.\n',  
            '\n',
            'publicacion de proyecto en netlify:\n',
            {text:'https://silly-kowalevski-36aac5.netlify.app/ \n\n',italics: true},
           
            'codigo fuente de repositorio:\n',
            {text: 'https://github.com/cesarsanchez5/placeholder_buscador.git \n', italics: true},
            
            '\n',
            '_________________________________________________________________________________\n',
            '\n\n',
            
          ],            
        } ,
        
        {
          text: [
            {text: 'Consulta de clima: ', fontSize: 12, bold: true},
            'Consumo de API openweathermap.org, insertando\n',            
            'ciudad y pais, muestra el clima solicitado. Elaborado con Javascript, React, nodeJS,\n',
            'css, HTML, utilizando el orden recomendado por React elaborando componentes\n',
            'con funciones usando sintaxis JSX, usando los hooks comunes: useState, useEffect.\n',
            'fetch para consumo de recursos.\n',
            
            '\n',
            'publicacion de proyecto en netlify:\n',
            {text: 'https://naughty-kilby-bb3912.netlify.app/ \n\n\n', italics: true},
            

            ],            
          } ,

////////////////////////

          {
            text: [
                  {text: 'Historial Laboral', fontSize: 16},
                  
                  {text: '(AJENO A PROGRAMACION)\n', fontSize: 18, bold: true},
          
          ]
           
          },
      
///////////////////////

          {
            text: [
              
              '2011-2019\n',            
            'Nemak monterrey\n',
            'Dpto: Proyectos, instalacion y montaje de lineas de produccion \n',
            'Libramiento Noreste 3.8Km, Garcia NL\n',            
            'Ing. Hector Juarez, Ing. Pedro Almanza\n',
            '(81) 87-48-52-00\n\n\n\n\n',
 
            ],            
          } ,
        
          {
            text: [
              
            

            '2010- 2011\n',
            'Ingenieria diseño y construccion mc S.A. de C.V.\n',
            'Dpto: Proyectos de Ingenieria Electrica y mtto\n',
            'Rayon #377 col. Centro, Monterrey NL\n',
            'Ing. Wenceslao Cantu\n',
            '(81) 83-42-45-03 y 83-42-86-54\n\n',

            ],            
          } ,
      
          {
            text: [
              
              '2008-2009\n',
              'Aselec\n',
              'Dpto. Automatizacion e instalaciones electricas\n',
              'Marina #4500 Col. Las Brisas\n',
              'Ing. Roberto Mtz\n',
              '(81)83-49-75-42\n\n',

              '2008\n',
              'Fervisa Ingenieria S.A de C.V.\n',
              'Dpto: Proyectos de Ingenieria Electrica\n',
              'Av. Lerdo de Tejada #544 Col. Las Villas, San Nicolas de los Garza\n',
              'Ing. Jose Luis Guerra\n',
              '(81) 83-32-59-54; 83-32-59-54\n\n',
              '2007-2008\n',
              'Rodriguez Duarte Instalaciones S.A. de C.V.\n',
              'Dpto:Proyectos de Ingenieria Electrica, Construccion\n',
              'Villagomez #1913 Col. Industrial, Monterrey N.L.\n',
              'Ing. Rene Salas\n',
              '(81) 83-75-65-84; 83-75-40-03\n\n',



            ],            
          } ,
          {
            text: 'PROYECTOS DE INSTALACION\n',
            style: 'header'
          },
          {
            text: [


              'Proyecto: Torre JM\n',
              'Marzo-Junio 2007\n',
              'Instalacion: Electrica, Hidrosanitaria, Contra Incendio\n',
              'Bulevard Rogelio Cantu #203\n',
              'Col: San Jeronimo\n\n',
              'Proyecto: Oficinas Gymsa\n',
              'Septiembre 2007-Marzo 2008\n',
              'Instalacion: Electrica y canalizacion de voz y datos\n',
              'Cerro de la silla #919\n',
              'Col: Obispado\n\n',

               

            ],            
          } ,
                    
          {
            text: 'PROYECTOS EN INGENIERIA ELECTRICA Y PUESTA\n EN MARCHA DE EQUIPOS',
            style: 'header'
          },
          {
            text: [
              
              '2010-2016 Nemak\n',
              'Tornamesa de moldeo aluminio (Instalacion de robots para diferentes operaciones,\n',
              'vaciado, sentado de piezas y extraccion de piezas; instalacion de moldes, sensores\n',
              'y multipuertos, ajustes y puesta en marcha)\n\n',

              '2010\n',
              'Ampliacion de terminal C\n',
              'OMA\n',
              'Ingenieria electrica: Calculo de allimentadores y derivados, corto circuito,\n',
              'malla de tierras, pararrayos, Iluminacion y elaboracion de planos en autocad\n\n',
              
              '2010\n',
              'Locales comerciales\n',
              'OMA\n',
              'Ingenieria electrica: Calculo de allimentadores y derivados, corto circuito,\n',
              'malla de tierras, pararrayos, Iluminacion y elaboracion de planos en autocad\n\n',
              
              '2010\n',
              'Tec Milenio Las Torres (Ampliacion)\n',
              'Ingenieria electrica: Calculo de allimentadores y derivados, corto circuito,\n',
              'Iluminacion y elaboracion de planos en autocad\n\n',
              
              '2010\n',
              'Tec Milenio Guadalupe\n',
              'Ingenieria electrica: Calculo de allimentadores y derivados, corto circuito,\n',
              'Iluminacion y elaboracion de planos en autocad\n\n',
              
            ],            
          } ,
          

{
          text: ' FUNCIONES QUE DOMINA \n',
          style: 'header'
        },
        {
          text: [
            
            'Funciones tecnicas: Mecanica en General, Electrisista, \n',
            'Control Logico Programable (PLC)\n',
            'Software: Auto Cad 80%, Solid works 40%, Word, Excel, Power Point\n\n',


          ],
        
          
       } ,

       

{
  text: 'CURSOS\n\n',
  style: 'header'
},
{
  text: [
    
    '2012\n',
    'Programacion de Robots ABB IRC5\n',
    'ABB\n',
    'Expositor: Luis Palomo\n\n',
    
    '2011\n',
    'Panel View Allen Bradley, entradas y salidas analogas: nivel, temperatura y velocidad\n',
    'Variador de frecuencia Power flex\n',
    'Didactica Industrial (nivel 2)\n',
    'Expositor: Jesus Perez Gerza, 83-30-23-06\n\n',
    
    '2011\n',
    'Programacion PLC: Siemens(step 7), Allen Bradley (RS Logix 500) y Omron (CX-Programer)\n',
    'Didactica Industrial (nivel 1)\n',
    'Expositor: Jesus Perez Gerza, 83-30-23-06\n\n',
    
    '2010\n',
    'Programacion de Microcontroladores PICs con MPLAB\n',
    'PIC16F84\n',
    'Facultad de Ingenieria Mecanica y Electrica\n',
    'Expositor: Omar Alejandro Muñoz\n\n',
    
    '2010\n',
    'Instalaciones Electricas en Hospitales y centros ambulatorios\n',
    'Facultad de Ingenieria Mecanica y Electrica\n',
    'Expositor: Ing. Saul Treviño\n\n\n\n',
    
    '2010\n',
    'Refrigracion Industrial\n',
    'Facultad de Ingenieria Mecanica y Electrica\n',
    'Expositor: Ing. Juan Hdz.\n\n',
    
    '2010\n',
    'Calderas y mtto\n',
    'Facultad de Ingenieria Mecanica y Electrica\n',
    'Expositor: Ing. Juan Hdz.\n\n',
    
    '2009\n',
    'Cruz Roja Mexicana\n',
    'Primeros auxilios\n\n',
    
    '2008\n',
    'Aire Acondicionado y Refrigeracion\n',
    'Escuela Electronica Monterrey\n\n',
    
    '2008\n',
    'FESTO\n',
    'Electroneumatica con PLC\n\n',
    
    '2006\n',
    'Schneider Electric\n',
    'Administracion y Calidad de la Energia Electrica\n\n',
    
    '2006\n',
    'Condumex\n',
    'Instalaciones Electricas\n\n',
    
    '2005\n',
    'Escuela Electronica Monterrey\n',
    'Sistemas Fuel Injection OBD I, OBD II\n\n',
    
    '2002\n',
    'Escuela Electronica Monterrey\n',
    'Control Logico Programable (PLC)\n\n',
    

  ],

  
} ,




        ],
        styles: {
            header: {
                fontSize: 16,
                bold: true
            },      
        }






}


pdfMake.createPdf(docDefinition).download("CV Cesar Sanchez");



}







