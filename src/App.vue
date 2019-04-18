<template>
    <div>
        <Banner />
        <p>
            <img src="./img/beeno1.jpg" alt="ビーノのイラスト" title="ナスビーノ" width="300">
        </p>
        <router-view></router-view>

        <li></li>
    </div>
</template>

<script>
    import Banner from './molcules/Banner.vue'
    export default {
        components:{
            Banner
        }
    }
</script>