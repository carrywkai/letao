<template>
    <div>
        <user-header></user-header>
        <user-content></user-content>
        <home-footer></home-footer>
    </div>
</template>

<script>
import userHeader from './components/userHeader'
import userContent from './components/userContent'
import homeFooter from '../home/components/homeFooter'
export default {
    name: 'user',
    components: {
        userHeader,
        userContent,
        homeFooter
    }
}
</script>

