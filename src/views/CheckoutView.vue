<template>
  
    <div class="w-5/12 relative hidden lg:block px-20 py-20">

      <SliderArea />

    </div>

    <div class="w-full lg:w-7/12 px-20 py-20">
      
      <CheckoutItem />

    </div>

</template>

<script setup>
  import SliderArea from '../components/slider/SliderArea.vue';
  import CheckoutItem from '../components/checkout/CheckoutItem.vue';
</script>
