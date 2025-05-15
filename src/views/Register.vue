<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold">Registro</h1>
    <input type="text" placeholder="Nombre Completo" class="border rounded p-2 w-full mt-4">
    <input type="email" placeholder="Correo Electrónico" class="border rounded p-2 w-full mt-2">
    <input type="password" placeholder="Contraseña" class="border rounded p-2 w-full mt-2">
    <button class="bg-green-600 text-white px-4 py-2 rounded mt-4">Registrar</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
};
</script>