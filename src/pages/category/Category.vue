<template>
    <div>
        <category-header></category-header>
        <category-content></category-content>
        <home-footer></home-footer>
    </div>
</template>

<script>
import categoryHeader from './components/categoryHeader'
import categoryContent from './components/categoryContent'
import homeFooter from '../home/components/homeFooter'

export default {
    name: 'Categroy',
    components: {
        categoryHeader,
        categoryContent,
        homeFooter
    }
}
</script>

<style scoped lang='less'>

</style>



