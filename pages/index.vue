<template>
  <div class="container">
    <h1>ログインするとシークレットコンテンツを見ることができます！</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <p><i>ログインには,ユーザ名に<b>takashi</b>、パスワードに<b>god</b>を使ってね。</i></p>
      <p>ユーザ名: <input v-model="formUsername" type="text" name="username"></p>
      <p>パスワード: <input v-model="formPassword" type="password" name="password"></p>
      <button type="submit">
        ログイン
      </button>
    </form>
    <div v-else>
      Hello!{{ $store.state.authUser.username }}!
      <pre>これはシークレットコンテンツです！、ログインしてるユーザにしか見えていません。</pre>
      <p><i>このページをリロードしてみてください、storeのstateは初期化されていないことに気づくはずです！</i></p>
      <button @click="logout">
        ログアウト
      </button>
    </div>
    <p>
      <NuxtLink to="/secret">
        秘密のページ
      </NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
