<template>
    <div>
        <register-header></register-header>
        <register-content></register-content>
        <home-footer></home-footer>
    </div>
</template>

<script>
import registerHeader from './compontents/registerHeader'
import registerContent from './compontents/registerContent'
import homeFooter from '../home/components/homeFooter'
export default {
    name: 'register',
    components: {
        registerHeader,
        registerContent,
        homeFooter
    }
}
</script>




