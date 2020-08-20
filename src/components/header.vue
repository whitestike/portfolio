<template>
    <div id="header">
        <Navbar/>
        <h1>Hi, I'm Rickert Goyvaerts</h1>
    </div>
</template>

<script>

import Navbar from './navbar.vue'

export default {
    name: 'Header',
    components:{
        Navbar,
    }
}

</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }

    #header{
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(-120deg, rgb(197, 206, 255),rgb(255, 235, 255) );  
    }

    #header h1{
        font-family: "montserrat", sans-serif;
        font-size: 50px;
        margin: 30vh 18%;
    }
</style>

