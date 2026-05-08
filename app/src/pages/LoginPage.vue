<script setup>
import { useAuth } from "@/stores/auth"
import { ref } from "vue"
const auth = useAuth()

const message = ref("")
const authentification = async () => {
    message.value = await auth.checkCredentials(username.value, password.value)
}

const username = ref("")
const password = ref("")
</script>

<template>
    <div class="grid place-items-center h-full">
        <h1>Login Page</h1>
        <div>
            <input v-model="username" type="text" placeholder="Username" class="border p-2 mb-2" />
        </div>

        <div>
            <input v-model="password" type="password" placeholder="Password" class="border p-2 mb-2" />
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="authentification">
            Login
        </button>
        <p class="mt-4 text-red-500">{{ message }}</p>
    </div>
</template>
