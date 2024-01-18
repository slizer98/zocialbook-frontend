<script setup>
import FooterMobile from './FooterMobile.vue'
</script>

<template>
  <header class="h-14 px-5 sticky top-0 bg-verde-pastel flex justify-between items-center z-10">
    <RouterLink to="/">
      <h1 class="text-beige-claro text-xl font-extrabold">ZocialBook</h1>
    </RouterLink>
    <nav class="w-full flex items-center justify-end">
      <div class="h-full flex pr-4">
        <input
          type="text"
          id="search"
          class="hidden rounded-r-lg outline-none bg-beige-claro w-3/4 text-sm p-1 text-verde-oscuro"
          placeholder="Nombre del libro o persona..."
        />
      </div>
      <div class="icon-container">
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #f9efdb; transform:; msfilter:"
          >
            <path
              d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.516 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            ></path>
          </svg>
        </span>
      </div>
    </nav>
  </header>

  <FooterMobile />
</template>
