<template>
  <div class="p-10 bg-sky-50 min-h-screen">
    <div class="grid grid-rows-2 gap-4">
      <VueTailwindDatePicker
        :disable-date="disableDates"
        :formatter="formatter"
        separator=" - "
        as-single
        use-range
        v-model="dateValue"
      />
    </div>
  </div>
</template>

<script setup>
import VueTailwindDatePicker from './VueTailwindDatePicker.vue'
import { ref } from 'vue'

const formatter = ref({
  date: 'MMM DD, YYYY',
  month: 'MMMM',
});

const dateValue = ref({
  startDate: "Nov 02, 2023",
  endDate: "Nov 03, 2023",
})

function disableDates(date) {
  return date > new Date();
}
</script>
