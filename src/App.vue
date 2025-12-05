<script setup>
</script>

<template>
    <header>
        <nav class="flex gap-4 mb-4">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/flowers">Flowers</RouterLink> 
            <RouterLink to="/computed">Computed</RouterLink>
            <RouterLink to="/store">Store</RouterLink>
            <RouterLink to="/tasks">Tasks</RouterLink>
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