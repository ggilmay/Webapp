Julio 26 - Inicio videos tutoriales para creacion de una pagina web MERN stack

Julio 26 - Creacion de la carpeta de backend y sus componentes para manejo del backend de la pagina, conexion simple al puerto 4000

Julio 27 - integracion con la base de datos, creacion de la base de datos, carpeta controllers encargada de los controladores, enviar la informacion requerida
a la base de datos, carpeta models que establece la base de datos mongo y las variables de cada uno de los elementos de la base de datos, y carpeta rutas ques establece
las rutas con la base de datos, trae o lleva informacion de esta, ademas carpetas de control como index.js que establece el camino a seguir, database.js que crea la base de datos mongo
y app.js que establece los nombres de las subrutas de la pagina, archivo env guarda el valor de la base de datos que se va crear, probada con exito y funcional en localhost

Julio 30 - creacion del front end con react y bootstrap, creacion de archivos de control de front end y de componentes de la weppage, createnote, que se utiliza para crear las notas de usuario con un usuario asignado y una fecha de publicacion, createuser que es la ventana de creacion de usuarios(proximamente reemplazada por un register y login con passport), loginuser que por ahora no cumple una funcionalidad, navigation que se encarga de crear una barra de navigacion para moverse entre los componentes de la pagina y Noteslist que despliega las notas creadas en la pagina principal

Agosto 3 - integracion de la aplicacion de ejemplo en aws educate, se le asigna un nombre con dot.tk, ahora la pgaina ejemplo corre en el servidor aws bajo el dominio bottled.ga, fallo de 
integracion con el DCA y fallo de integracio de la pagina web personal con el DCA y AWS

Agosto 4 - creacion de archivos docker en applicacion personal para integracion con AWS, fallo, certificado en pagina web ya establecida no responde a las caracterisitcas que son

Agosto 10 - DCA sin respuesta, trabajo en la integracion con docker de aplicacion personal para el DCA

Agosto 16 - aplicacion personal correctamente establecida en el DCA, pm2 funcionando pero sin resultado con el frontend debido a que no considera un token inesperado a react, corre con npm start correctamente pero falla con su integracion a la base de datos en el DCA

Agosto 17 - aplicacion montada en el DCA pero sin correcta integracion entre backend y frontend y applicacion de juguete completamente montada en AWS educate, no se puede probar debido a que aws educate esta caido