<template>
    <div>
        <shopcart-header></shopcart-header>
        <shopcart-content></shopcart-content>
        <home-footer></home-footer>
    </div>
</template>

<script>
import shopcartHeader from './components/shopcartHeader'
import shopcartContent from './components/shopcartContent'
import homeFooter from '../../pages/home/components/homeFooter'
export default {
    name: 'Shopcart',
    components: {
        shopcartHeader,
        shopcartContent,
        homeFooter
    }
}
</script>


