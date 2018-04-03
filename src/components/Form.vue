<template>
  <div v-html="form">
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      form: null
    };
  },
  created() {
    axios
      .get("api/3d8226556e67a16802ffe4c6fefbf41e7dcb9cdb/form.html")
      .then(response => {
        this.form = response.data;
      });
  }
};
</script>
