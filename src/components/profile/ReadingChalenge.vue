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
  <article class="w-[99%] xs:w-full md:max-w-md flex flex-col justify-center items-center bg-gray-50 mt-4 box-border rounded-md shadow-lg p-4">
    <h2 class="font-semibold text-gray-800 text-xl md:text-2xl">Reto de lectura</h2>
      <div class="flex flex-col justify-center items-center space-y-2 sm:flex-row sm:justify-between">
        <p class="text-base md:text-lg text-gray-500">Mi meta es leer 
          <span class="text-gray-600 font-bold">
            {{ userProfile.annualBookGoal }}
          </span>  libros en 2024
        </p>

      </div>
    <div class="w-full mx-auto relative h-60 sm:h-80 md:h-96 lg:h-96 xl:h-80 2xl:h-96">
      <Doughnut :data="data" :options="options" />
      <p class="absolute  top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl font-bold text-primary">20%</p>
    </div>
    <RouterLink to="#" class="text-base md:text-lg w-full mt-3 bg-gray-300 hover:bg-gray-400 p-3 text-center rounded-md font-semibold transition ">
      Editar meta
    </RouterLink>
  </article>
</template>