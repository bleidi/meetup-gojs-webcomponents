<template>
  <div id="app">
    <input v-model="inputName">
    <br>
    <welcome-aboard-html-import :name="inputName"></welcome-aboard-html-import>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputName: `GO`
    }
  }
}
</script>
