<script setup>
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/flowers">Flowers</RouterLink> 
            <RouterLink to="/computed">Computed</RouterLink>
        </nav>
    </header>
    <RouterView />
</template>

<style>
.btn-primary {
        background-color:rgb(192, 235, 238);
    }
    
@import "bootstrap-icons";
/*@import "tailwindcss";*/
</style>