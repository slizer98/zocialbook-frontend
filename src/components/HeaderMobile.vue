<script setup>
  import FooterMobile from './FooterMobile.vue'
  import notificationIcon from '@/assets/icons/notification.svg'
  import messageIcon from '@/assets/icons/message.svg'

</script>

<template>
  <header class="h-14 px-5 fixed w-full top-0 bg-primary flex justify-between items-center z-10">
    <RouterLink to="/">
      <h1 class="text-tertiary text-xl font-extrabold">ZocialBook</h1>
    </RouterLink>
    <nav class="w-full flex items-center justify-end">
      <div class="h-full flex pr-4">
        <input
          type="text"
          id="search"
          class="hidden rounded-r-lg outline-none bg-tertiary w-3/4 text-sm p-1 text-verde-oscuro"
          placeholder="Nombre del libro o persona..."
        />
      </div>
      <div class="flex gap-3">
        <img :src="messageIcon" alt="messageIcon">
        <img :src="notificationIcon" alt="notificationIcon">
      </div>
    </nav>
  </header>

  <FooterMobile />
</template>
