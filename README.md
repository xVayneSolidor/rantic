# rantic
NODE.js Backend web service {Express, MySQL}

# Librerias utilizadas:
    "bcryptjs": "^2.4.3",
    "connect-flash": "^0.1.1",
    "express": "^4.17.1",
    "express-handlebars": "^3.1.0",
    "express-mysql-session": "^2.1.0",
    "express-session": "^1.17.0",
    "express-validator": "^6.2.0",
    "morgan": "^1.9.1",
    "mysql": "^2.17.1",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0",
    "timeago.js": "^4.0.1"
 
# Configuracion
1. Para ejecutar la aplicacion se deben descargar todos los directorios, (incluyendo los modulos).
2. Debe instalarse (si no esta) MySql. El archivo en el directorio: rantic/database/db.sql tiene las tablas de usuarios y ordenes, solo hay que ejecutar esas sentencias.
3. Puede usarse cualquier editor para los archivos que tienen el API de Node.js, se ejecuta la aplicacion con la sentencia: "npm run dev" (sin las comillas). el localhost es el 4000.
 
# Funcionamientos
La aplicacion mostrara una pantalla donde se podran ver las opciones de Login y SignUp.
Permitira a un usuario crear una orden, editarla, borrarla o listar las ordenes existentes.
Otro usuario de rantic puede ver las ordenes creadas, podra tambien editarlas y borrarlas.
