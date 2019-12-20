<template>
  <div>
    <h1>秘密のページ</h1>
    <p>ログインしていない状態でこのページを訪れてみてください、 エラーページに飛ばされるはずです。</p>
    <NuxtLink to="/">
      戻る
    </NuxtLink>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
