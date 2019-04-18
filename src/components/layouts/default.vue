<template>
    <div>
        <Banner />
        <NasBeeeno />
        <nuxt/>
    </div>
</template>

<script>
    import Banner from '../molcules/Banner.vue'
    import NasBeeeno from '../atoms/NasBeeeno.vue'
    export default {
        components:{
            Banner,
            NasBeeeno
        }
    }
</script>