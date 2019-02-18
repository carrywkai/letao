<template>
    <div>
        <login-header></login-header>
        <login-content></login-content>
        <home-footer></home-footer>
    </div>
</template>

<script>
import loginHeader from './components/loginHeader'
import loginContent from './components/loginContent'
import homeFooter from '../home/components/homeFooter'
export default {
    name: 'Login',
    components: {
        loginHeader,
        loginContent,
        homeFooter
    }
}
</script>

<style lang="less" scoped>

</style>


