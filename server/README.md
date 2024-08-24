# Servidor de recolección de credenciales

Esta sección del repositorio incluye el código fuente de un servidor destinado a escuchar las peticiones realizadas
por la página clon, su principal función es recolectar las credenciales ingresadas por los usuarios y almacenarlas
en archivos de texto, dicha información recolectada es cifrada utilizando el algoritmo AES con el fin de mantener
el acceso exclusivo a la información.

Ademas este servidor cuenta con un _endpoint_ que permite realizar consultas sobre los archivos con las credenciales
cifradas para obtener la información descifrada.

**Nota: Las credenciales registradas no son subidas al repositorio ya que se encuentran dentro de los archivos
especificados por el archivo _.gitignore_ y ocurre lo mismo en el caso del archivo _.env_ que contiene entre otras cosas
la llave utilizada para el encriptado AES.**

# ⚠️ Aviso Importante ⚠️

**Este repositorio y su contenido fue creado unicamente con fines educativos y como parte de las actividades de la
materia de Seguridad Informática del ciclo escolar 2025-1 por lo que cualquier uso malicioso es responsabilidad del
usuario que haya parcial o totalmente clonado el repositorio.**

## Requisitos previos

- NodeJS, la versión utiliza en desarrollo fue NodeJS 20.15.1
- NPM, la versión utilizada en desarrollo fue NPM 10.8.2

Reconstruir el archivo _.env_ para las variables de entorno con la estructura siguiente:

```
PORT=
PASS_PHRASE=
```

Donde:

- PORT: Indica el puerto sobre el cual va a ser montado el servidor.
- PASS_PHRASE: Indica la llave secreta utilizada para encriptar la información.

**Nota: El archivo _.env_template_ fue creado para facilitar la tarea de creación del archivo de variables
de entorno.**

## Tecnologías Utilizadas

- **NodeJS**: Nos permite ejecutar JavaScript fuera del navegador, adicionalmente utilizamos parte del framework para
  realizar la lectura y escritura de los archivos de texto.
- **Express**: Es un framework que nos facilita la implementación de una API REST.
- **CryptoJS**: Es una librería que nos ofrece varios algoritmos de cifrado y _hashing_.
- **Dotenv**: Nos permite la lectura de archivos _.env_ con nuestras variables de entorno lo que mantiene centralizados
  los valores de estas constantes y lejos de nuestro código fuente.
- **Cors**: Facilita la implementación de CORS y nos habilita a utilizar la API REST desde dominios diferentes.
- **Valibot**: Es una librería que nos ayuda a validar la información que reciben los _endpoints_ del servidor y con ayuda
  de un _middleware_ personalizado retornar a la página clon los errores de validación.

## Comandos Básicos del servidor

- Descargar los _node_modules_ (si es necesario)

```
npm i
```

- Compilación del codigo TypeScript y ejecución del servidor

```
npm run dev
```

- Ejecución del servidor

```
npm run start
```
