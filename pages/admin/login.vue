<template>
  <div class="container">
    <form
      id="login"
      class="flex items-center flex-col mt-16"
      @submit.prevent="login"
    >
      <h2 class="mb-8">{{ $t('auth.title') }}</h2>
      <div class="space-y-4">
        <div>
          <label for="email"
            ><h4 class="mb-1">{{ $t('auth.email') }}</h4></label
          >
          <input
            id="email"
            v-model="user.email"
            type="email"
            placeholder="exer7um@gmail.com"
            class="
              bg-gray-100
              border-transparent
              rounded-md
              focus:ring-indigo-600
              focus:border-indigo-600
              dark:bg-gray-700
              dark:placeholder-gray-400
              dark:focus:ring-indigo-500
              dark:focus:border-indigo-500
              dark:text-white
            "
            required
          />
        </div>
        <div>
          <label for="password"
            ><h4 class="mb-1">{{ $t('auth.password') }}</h4></label
          >
          <input
            id="password"
            v-model="user.password"
            type="password"
            :placeholder="$t('auth.passwordPlaceholder')"
            class="
              bg-gray-100
              border-transparent
              rounded-md
              focus:ring-indigo-600
              focus:border-indigo-600
              dark:bg-gray-700
              dark:placeholder-gray-400
              dark:focus:ring-indigo-500
              dark:focus:border-indigo-500
              dark:text-white
            "
            required
          />
        </div>
      </div>
      <button
        type="submit"
        form="login"
        class="
          mt-8
          flex
          items-center
          justify-center
          border
          rounded-md
          py-2
          px-4
          w-max
          border-transparent
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          dark:bg-indigo-700
          dark:hover:bg-indigo-600
        "
      >
        {{ $t('buttons.login') }}
      </button>
    </form>
  </div>
</template>

<script>
import nuxtStorage from 'nuxt-storage'

export default {
  middleware({ store, redirect }) {
    if (nuxtStorage.localStorage.getData('user')) {
      return redirect('/admin')
    }
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  head() {
    return {
      title: `${this.$t('pages.auth')} | exer7um.github.io`,
    }
  },
  methods: {
    async login() {
      try {
        const res = await this.$axios.$post(
          `${this.$axios.defaults.baseURL}/auth/login`,
          this.user
        )
        nuxtStorage.localStorage.setData('user', res, 7, 'd')
        this.$router.push(this.localePath('/admin'))
      } catch (err) {
        alert('Введены неверные данные!')
      }
    },
  },
}
</script>
