<template>
    <div class="flex flex-col max-w-[590px] items-start">
        <h2 class="text-2xl text-white">
            Payment Details
        </h2>
        <form>
            <p class="flex w-full flex-col font-poppins font-normal">
                <label for="card-holder-name" class="uppercase">Card Holder Name</label>
                <input 
                    placeholder="XXXXXX XXXXXXXXX"
                    class="bg-transparent w-full border-b-2 border-black px-1 py-1 text-[22px] text-white capitalize placeholder:text-white" 
                    type="text" 
                    id="card-holder-name" 
                    name="card-holder-name"
                    /> 
            </p>
            <p>
                <label for="card-number">Card Number</label>
                <input type="text" id="card-number" name="card-number" /> 
            </p>
            <div class="flex gap-5">
                <p>
                    <label for="expiry-date">Exp Date</label>
                    <input type="text" id="expiry-date" name="expiry-date" /> 
                </p>
                <p>
                    <label for="card-cvv">Cvv</label>
                    <input type="text" id="card-cvv" name="card-cvv" /> 
                </p>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>