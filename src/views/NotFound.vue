<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
    <h1 class="text-9xl font-extrabold text-gray-300">404</h1>
    <p class="text-2xl sm:text-3xl font-semibold text-gray-700 mt-4">Page Not Found</p>
    <p class="text-gray-500 mt-2 mb-6 max-w-md text-center">
      Sorry, the page you are looking for does not exist.
    </p>
    <router-link
      to="/"
      class="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
    >
      Go Home
    </router-link>
  </div>
</template>
