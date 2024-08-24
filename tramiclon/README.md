# Página Clon TramiFES

La siguiente página trata de emular la experiencia brindada por la página TramiFES la cual es una plataforma
que brinda acceso a diversos servicios y tramites a los estudiantes de la FES Aragón desde la comodidad de su casa,
esta plataforma ofrece dos modalidades de login:

1. Utilizando una cuenta de Gmail **@aragon.unam.mx**
2. Utilizando el número de cuenta del alumno y una contraseña.

# ⚠️ Aviso Importante ⚠️

**Este repositorio y su contenido fue creado unicamente con fines educativos y como parte de las actividades de la
materia de Seguridad Informática del ciclo escolar 2025-1 por lo que cualquier uso malicioso es responsabilidad del
usuario que haya parcial o totalmente clonado el repositorio.**

## Requisitos previos

- NodeJS, la versión utiliza en desarrollo fue NodeJS 20.15.1
- NPM, la versión utilizada en desarrollo fue NPM 10.8.2

## Tecnologías empleadas

- **Astro**: Un framework de desarrollo de páginas web estáticas con la comodidad de agrupar elementos y lógica en
  componentes personalizados, ademas los estilos CSS tienen un _scope_ de componente por lo que facilita la tarea de
  estilar una página web.
- **@Material/Web**: Es una libreria de componentes que implementan Material Design de Google. Esta alternativa a
  diferencia de otras que ofrece Google ofrece estos componentes en forma de _Web Components_ por lo que puede
  usarse en un framework como _Astro_ sin necesidad de implementar alguna libreria/framework de _frontend_
  como _ReactJS_, _VueJS_, etc.
- **Bootstrap**: Es un framework CSS que facilita la construcción de sitios Web al incoporar diseños de elementos
  HTML por defecto.

## Comandos básicos de la aplicación

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
