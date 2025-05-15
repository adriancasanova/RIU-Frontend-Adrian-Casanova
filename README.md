# RiuFrontend

Aplicación que permite el mantenimiento de súper héroes desarrollada con **Angular 17.0.1**

### La misma permite:

- Crear un nuevo héroe
- Editar un héroe
- Listar los héroes
- Eliminar héroes
- Filtrarlos por nombre o id

### Tecnologías utilizadas

- [Angular 17.0.1](https://angular.dev/)
- [Node.js 20.10.0](https://nodejs.org/es/download/)
- [Docker 28.0.1](https://www.docker.com/)
- [Nginx](https://nginx.org/en/)
- [Angular Material 17.3.10](https://material.angular.dev/)
- [ngx-pagination 6.0.3](https://www.npmjs.com/package/ngx-pagination/)


## Instalación y ejecución local

### Pasos:

1. Clonar el repositorio:<br/>
   ```cmd
    git clone https://github.com/adriancasanova/RIU-Frontend-Adrian-Casanova
    ```

2. Navegar a la carpeta del proyecto clonado:<br/>     
   ```cmd
    cd riu-frontend 
    ```

3. Instalar dependencias:<br/>
   ```cmd
   npm install
   ```

4. Levantar el servidor de desarrollo:<br/>
   ```cmd
   ng serve
   ```

5. La aplicación estará disponible en: <br/>
   http://localhost:4200


## Ejecución en Docker

### Prerrequisito
Tener Docker instalado

### Pasos:

1. Tenerdocker inicializado

2. Construir la imagen Docker:
```cmd
docker build -t riu-frontend .
```

3. Ejecutar el contenedor:
```cmd
docker run -p 80:80 riu-frontend
```

4. Acceder a la aplicación en el navegador:<br/>
http://localhost


## Correr test 

 ```cmd
   ng test
   ```
