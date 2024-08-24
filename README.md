# Página Clon TramiFES y Servidor de Recolección de Credenciales

El siguiente repositorio contiene los sigueintes proyectos:

- **Tramiclon**: Una página web creada con _Astro_ que intenta reproducir la página **TramiFES** de la FES Aragón esta
  incluye los mismos métodos de acceso que la página original, login con el correo institucional **@aragon.unam.mx** o
  con el número de cuenta y contraseña del alumno.
- **Server**: Un servidor creado con _Express_ que se encarga de recolectar las credenciales enviadas por la
  página clon y almacenarlas en archivos de texto (la información es cifrada con el algoritmo AES), tambien ofrece
  un endpoint que permite realizar consultas sobre los archivos de texto para obtener la informacíon descifrada.

# ⚠️ Aviso Importante ⚠️

**Este repositorio y su contenido fue creado unicamente con fines educativos y como parte de las actividades de la
materia de Seguridad Informática del ciclo escolar 2025-1 por lo que cualquier uso malicioso es responsabilidad del
usuario que haya parcial o totalmente clonado el repositorio.**

## Vector de ataque

Previo al inicio de semestre la FES Aragón a traves de **TramiFES** publica los horarios de inscripción de los alumnos,
para lo cual es necesario que cada alumno inicie sesión dentro de la plataforma y con ello enterarse del horario asignado.

Con base a lo anterior se podria enviar correos electronicos a los alumnos de la FES Aragón informando sobre el inminente
periodo de inscripciones y solicitandoles acceder a su cuenta para consultar su horario de inscripción. Dado que las areas
administrativas de la facultad cuentan con el mismo dominio que el correo personal de un estudiante o profesor se podria
utilizar un correo institucional vulnerado como la cuenta emisora de los correos.

Dentro de dicho correo ademas de informarle el proximo periodo de inscripciones al alumno se debe incluir el link a
nuestra página clon.

Una vez dentro de la página clon el alumno usará la opción de login que más prefiera y una vez finalizado el proceso de
ingresar sus credenciales estas serán enviadas al servidor el cual las valida y alamacena, posteriormente el estudiante
sera redirigido a la página real de la FES Aragón en la cual podrá continuar con su proceso de inicio de sesión sin
mayor problema.

**Nota: Cuando un alumno recien ingresa a la facultad y aun no posee un correo institucional la facultad facilita
una página con la cual el propio alumno genera su cuenta, esta puede ser aprovechada para obtener una cuenta institucional
sin la necesidad de vulnerar una ya existente.**

## Servidor de Recolección de Credenciales

Esta sección del repositorio incluye el código fuente de un servidor destinado a escuchar las peticiones realizadas
por la página clon, su principal función es recolectar las credenciales ingresadas por los usuarios y almacenarlas
en archivos de texto, dicha información recolectada es cifrada utilizando el algoritmo AES con el fin de mantener
el acceso exclusivo a la información.

Ademas este servidor cuenta con un _endpoint_ que permite realizar consultas sobre los archivos con las credenciales
cifradas para obtener la información descifrada.

**Nota: Las credenciales registradas no son subidas al repositorio ya que se encuentran dentro de los archivos
especificados por el archivo _.gitignore_ y ocurre lo mismo en el caso del archivo _.env_ que contiene entre otras cosas
la llave utilizada para el encriptado AES.**

### Tecnologías Utilizadas

- **NodeJS**: Nos permite ejecutar JavaScript fuera del navegador, adicionalmente utilizamos parte del framework para
  realizar la lectura y escritura de los archivos de texto.
- **Express**: Es un framework que nos facilita la implementación de una API REST.
- **CryptoJS**: Es una librería que nos ofrece varios algoritmos de cifrado y _hashing_.
- **Dotenv**: Nos permite la lectura de archivos _.env_ con nuestras variables de entorno lo que mantiene centralizados
  los valores de estas constantes y lejos de nuestro código fuente.
- **Cors**: Facilita la implementación de CORS y nos habilita a utilizar la API REST desde dominios diferentes.
- **Valibot**: Es una librería que nos ayuda a validar la información que reciben los _endpoints_ del servidor y con ayuda
  de un _middleware_ personalizado retornar a la página clon los errores de validación.

### Comandos Básicos del servidor

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

## Página Clon TramiFES

La siguiente página trata de emular la experiencia brindada por la página TramiFES la cual es una plataforma
que brinda acceso a diversos servicios y tramites a los estudiantes de la FES Aragón desde la comodidad de su casa,
esta plataforma ofrece dos modalidades de login:

1. Utilizando una cuenta de Gmail **@aragon.unam.mx**
2. Utilizando el número de cuenta del alumno y una contraseña.

### Tecnologías empleadas

- **Astro**: Un framework de desarrollo de páginas web estáticas con la comodidad de agrupar elementos y lógica en
  componentes personalizados, ademas los estilos CSS tienen un _scope_ de componente por lo que facilita la tarea de
  estilar una página web.
- **@Material/Web**: Es una libreria de componentes que implementan Material Design de Google. Esta alternativa a
  diferencia de otras que ofrece Google ofrece estos componentes en forma de _Web Components_ por lo que puede
  usarse en un framework como _Astro_ sin necesidad de implementar alguna libreria/framework de _frontend_
  como _ReactJS_, _VueJS_, etc.
- **Bootstrap**: Es un framework CSS que facilita la construcción de sitios Web al incoporar diseños de elementos
  HTML por defecto.

### Comandos básicos de la aplicación

- Descargar los _node_modules_ (si es necesario)

```
npm i
```

- Ejecutar el servidor de desarrollo

```
npm run dev
```

- Crear el _build de producción_

```
npm run build
```

- Ejecutar un servidor de prueba con el _build de producción_

```
npm run preview
```
