<template>
  <el-input placeholder="Please input" v-model="input">
  </el-input>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
  } from 'vue-property-decorator';
  import {
    Input,
  } from 'element-ui';
  
  Vue.use(Input);
  @Component({
    // componentsで読み込む場合
    // components: {
    //   'el-input': Input,
    // },
  })
  export default class UseElement extends Vue {
    private input: string = '';
  }
</script>
