<script setup>
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/flowers">Flowers</RouterLink> 
        </nav>
    </header>
    <RouterView />
</template>

<style>
.btn-primary {
        background-color:rgb(192, 235, 238);
    }
</style>

<style>
@import "bootstrap-icons";
/*@import "tailwindcss";*/
</style>