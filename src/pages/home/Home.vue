<template>
    <div>
        <home-header></home-header>
        <home-content></home-content>
        <home-footer></home-footer>
    </div>
</template>

<script>
// 引入之间
import homeHeader from './components/homeHeader'
import homeContent from './components/homeContent'
import homeFooter from './components/homeFooter'

export default {
    name: 'Home',
    components: {
        homeHeader,
        homeFooter,
        homeContent
    }
}
</script>

<style scoped lang='less'>

</style>


