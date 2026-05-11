# Roda Crédito Web

Frontend del sistema de simulación de crédito desarrollado en React + Vite como prueba tecnica para RODA, diseñado para consumir una API externa y desplegado en Cloudflare Pages. Este proyecto permite a los usuarios simular solicitudes de crédito de forma rápida, dinámica y responsiva almacenando la informacion del usuario al momento de realizar el registro de la solicitud.


## Arquitectura del proyecto

Frontend construido con React + Vite, utilizando JavaScript moderno (ES6+). La comunicación con el backend se realiza mediante API REST (Axios). El proyecto está diseñado como una SPA (Single Page Application) y desplegado en Cloudflare Pages con configuración mediante variables de entorno.


## Requisitos del sistema

Para ejecutar el proyecto de forma local se requiere tener instalado Node.js versión 18 o superior y npm o yarn. Puedes verificarlo ejecutando:

node -v  
npm -v  


## Instalación local

Clona el repositorio desde GitHub:

git clone https://github.com/JuanGaspar18/roda-credito-web.git  

Accede al directorio del proyecto:

cd roda-credito-web  

Instala las dependencias:

npm install  


## Variables de entorno

El proyecto requiere la configuración de variables de entorno en un archivo .env ubicado en la raíz del proyecto. Estas variables son utilizadas por Vite en tiempo de compilación.

VITE_API_URL=https://roda-credito-api.onrender.com/api  

Es importante tener en cuenta que todas las variables deben iniciar con el prefijo VITE_. El archivo .env no debe ser subido al repositorio. En producción, estas variables se configuran directamente en el panel de Cloudflare Pages.

## Ejecución en entorno local

Para iniciar el servidor de desarrollo ejecuta:

npm run dev  

La aplicación estará disponible en:

http://localhost:5173  


## Build de producción

Para generar la versión optimizada del proyecto:

npm run build  

Para previsualizar el build localmente:

npm run preview  

## Deploy

El proyecto se encuentra desplegado en Cloudflare Pages con despliegue automático desde la rama principal del repositorio, quiere decir que cada vez que la rama main se actualice CloudFlare volvera a indexar toda la informacion automaticamente con el fin de mantener los cambios siempre vigentes.

## Integración con backend

Este frontend consume una API externa desarrollada en Python con Flask alojada en:

https://roda-credito-api.onrender.com/api  

El backend es responsable de procesar las simulaciones de crédito y retornar los resultados al frontend.


## Estructura del proyecto

src/
    api/
    assets/  
    components/
    context/
    layouts/  
    pages/  
    services/    
    utils/
    App.css  
    App.jsx
    index.css  
    main.jsx  


## Flujo del sistema

El usuario ingresa datos en el formulario, el frontend valida la información y la envía al backend mediante una petición HTTP. El backend procesa la solicitud de simulación de crédito y retorna una respuesta. El frontend recibe la respuesta y la muestra dinámicamente en la interfaz de usuario.
Al finalizar va a tener un formulario de registro de solicitud en donde al completarlo se envia la informacion mediante una peticion HTTP, el backend lo recibe y almacena los datos dentro de la base de datos correspondiente.

## Consideraciones técnicas

Vite inyecta variables de entorno en tiempo de build, por lo que cualquier cambio en el archivo .env requiere reiniciar el servidor o generar nuevamente el build. El proyecto no maneja persistencia de datos en el frontend y depende completamente de la disponibilidad del backend para su funcionamiento correcto.

## Autor

Proyecto desarrollado por Juan David Gaspar Neira como simulador de crédito con enfoque en experiencia de usuario, arquitectura frontend moderna y escalabilidad para la empresa RODA como prueba tecnica.