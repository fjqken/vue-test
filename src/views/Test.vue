<template>
  <div class="test">
    <h1>This is an about page2</h1>
    <HelloWorld msg="Welcome1 to Your Vue.js App"/>
    <ul class="ul1">
      <li>aa</li>
      <li>bb</li>
    </ul>
    <test1></test1>
  </div>
</template>

<style scoped lang="stylus">
.ul1
  list-style none
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import test1 from '@/components/test.vue'
export default {
  components: {
    HelloWorld,
    test1
  }
}

</script>
