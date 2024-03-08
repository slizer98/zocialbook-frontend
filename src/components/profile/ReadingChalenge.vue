<script setup>
  import { computed } from 'vue';
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { useUserStore } from '@/stores/user';

  ChartJS.register(ArcElement, Tooltip, Legend)
  
  const user = useUserStore()
  const userProfile =  computed( () => user?.user || {})
  const data = {
    labels: ['Leidos', 'No leidos'],
    datasets: [
      {
        data: [2, 20],
        backgroundColor: [
          '#70d19f',
          'rgb(255, 99, 132)',
        ],
        hoverOffset: 4
      }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  }

</script>
<template>
  <article class="flex w-full flex-col items-center justify-center space-y-2 bg-tertiary max-w-md mt-4 p-5">
    <h2 class="font-semibold text-gray-800 text-lg">Reto de lectura</h2>
      <div class="flex flex-col justify-center items-center space-y-2 sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-500">Mi meta es leer 
          <span class="text-gray-600 font-bold">
            {{ userProfile.annualBookGoal }}
          </span>  libros en 2024
        </p>

      </div>
    <div class="w-full mx-auto relative h-60 sm:h-80 md:h-96 lg:h-96 xl:h-80 2xl:h-96">
      <Doughnut :data="data" :options="options" />
      <p class="absolute  top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl font-bold text-primary">20%</p>
    </div>
    <RouterLink to="#" class="text-xs w-full bg-gray-300 p-3 text-center rounded-md font-semibold">
      Editar meta
    </RouterLink>
  </article>
</template>

