<template>
    <div>
        <Banner />
        <NasBeeeno />
        <router-view></router-view>
    </div>
</template>

<script>
    import Banner from './components/molcules/Banner.vue'
    import NasBeeeno from './components/atoms/NasBeeeno.vue'
    export default {
        components:{
            Banner,
            NasBeeeno
        }
    }
</script>