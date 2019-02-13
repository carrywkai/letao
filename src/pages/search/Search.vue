<template>
    <div class="search">
        <search-header></search-header>
        <search-content></search-content>
        <home-footer></home-footer>
    </div>
</template>

<script>
import searchHeader from './components/searchHeader'
import searchContent from './components/searchContent'
import homeFooter from '../home/components/homeFooter'
export default {
    name: 'search',
    components: {
        searchHeader,
        searchContent,
        homeFooter
    }
}
</script>

