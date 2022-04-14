<template>
  <div class="flex h-full justify-center">
    <div class="bg-white m-auto w-full max-w-2xl shadow-md rounded p-8">
      <h1 class="text-xl text-primary mb-5">Acerca de</h1>
      <p>
        Sitio web desarrollado por
        <a href="https://teogonzalez.dev" target="_blank"
          >Teo González Calzada</a
        >
        para el Centro de Ciencias Atmosféricas y Tecnologías Verdes.
      </p>
      <br />
      <p>
        Este proyecto es open source, está publicado bajo la licencia MIT, y
        puede ser descargado desde
        <a href="https://github.com/thblckjkr/meteoreo-web" target="_blank"
          >GitHub</a
        >.
      </p>
      <br />
      <p>
        Desarrollado con VueJS y Tailwind para el frontend, FastAPI para el
        backend.
      </p>
    </div>
  </div>
</template>

<style>
/* Mark Target blank links */
a[target="_blank"] {
  @apply underline text-secondary;
}
</style>
