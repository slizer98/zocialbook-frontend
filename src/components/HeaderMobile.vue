<script setup>

</script>

<template>
  <header class="h-14 px-5 sticky top-0 bg-verde-pastel flex justify-between items-center">
    <RouterLink to="/">
      <h1 class="text-beige-claro text-xl font-extrabold ">ZocialBook</h1>
    </RouterLink>
    <nav class="w-full flex items-center justify-end">
      <div class="h-full flex pr-4">

        <input type="text" id="search" class="hidden rounded-r-lg outline-none bg-beige-claro w-3/4 text-sm p-1 text-verde-oscuro" placeholder="Nombre del libro o persona...">
      </div>
      <div class="icon-container">
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #F9EFDB ;transform: ;msFilter:;"><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.516 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
        </span>
      </div>
    </nav>
  </header>
  

  <footer class="fixed bottom-0 w-full h-14 px-5 border-t border-melocoton-pastel flex justify-between items-center bg-beige-claro">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #9DBC98;transform: ;msFilter:;"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #1c4131;transform: ;msFilter:;"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #9DBC98;transform: ;msFilter:;"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #9DBC98;transform: ;msFilter:;"><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #9DBC98;transform: ;msFilter:;"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg>
  </footer>
</template>

