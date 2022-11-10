<template>
  <div class="browser">
    <div class="bar">
      <div class="url">http://{your-ip-address}/froxlor<span v-if="url">/{{ url }}</span></div>
    </div>
    <img :src="src" :alt="alt">
  </div>
</template>

<style scoped>
  .browser {
    background: #eee;
    color: #bbb;
    border: solid 1px #f8f8f8;
    border-radius: 0.35rem;
    margin-bottom: 1.5rem;
  }
  .browser .bar {
    padding: .75rem;
  }
  .browser .bar .url {
    background: #ffffff;
    padding: 0.35rem 0.35rem;
    border-radius: 0.35rem;
  }
  .browser img {
    margin-bottom: -5px;
    border-top: solid 1px #eee;
    border-radius: 0 0 0.35rem 0.35rem;
  }
</style>

<script>
  export default {
    props: {
      src: {
        type: String,
      },
      alt: {
        type: String,
      },
      url: {
        type: String,
      }
    }
  }
</script>
