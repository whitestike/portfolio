<template>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;800&display=swap" rel="stylesheet">
    <div class="header">
        <ul class="navbar">
            <li><a href="#">home</a></li>
            <li><a href="#">about me</a></li>
            <li><a href="#">contact</a></li>
        </ul>
    </div>
</template>

<style>
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: black;
        font-family: 'Montserrat', sans-serif;
    }

    .navbar{
        margin: 0 auto;
        width: 90%;
        padding: 10px 0;
        list-style: none;
        display: flex;
        justify-content: space-around;
    }

    .navbar a{
        margin: 0 10px;
        font-weight: bold;
        padding: 0 10px;
        color: rgb(34, 34, 34);
    }

    .navbar a:hover{
        color: rgb(255, 255, 255);
        background: rgb(97, 40, 255);
        padding: 10px 10px;
        transition: 0.3s ease;
    }
</style>