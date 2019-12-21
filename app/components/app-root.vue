<template>
    <div id="app">
        <i8-header></i8-header>
    </div>    
</template>

<script>
    import Vue from 'vue';
    import i8header from './i8-header'    

    Vue.component('i8-header', i8header);

    export default {
        data() {
            return {
            };
        }
    }
</script>

<style>
</style>
