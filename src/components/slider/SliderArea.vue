<template>
    <div class="relative z-10">

      <a href="#" class="text-lg font-poppins font-semibold flex items-center">
        <i class="mr-2">
          <IconArrow />
        </i>
        Back
      </a>

    </div>
    <picture class="absolute w-full h-full top-0 left-0 z-0 bg-cover min-h-screen" />
</template>

<script setup>
   import IconArrow from '../icons/IconArrow.vue';
</script>

<style scoped>
  picture {
    background-image: url(../../assets/img/slider-bg.svg);
  }
</style>