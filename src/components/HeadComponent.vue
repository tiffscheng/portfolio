<template>
  <div>
    <img src="@/assets/port.jpg" id="profile">
    <h1>{{msg}}</h1>
    <ul>
      <li v-for="link in links" :key="link">
        <a :href="link.url">{{link.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeadComponent',
  props: {
    'msg': String
  },
  data() {
    return {
      'links': [
      {
        'title': 'See the old version',
        'url': '/portfolio'
      },]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img#profile {
  border-radius: 50%;
  width: 200px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #178572;
}
</style>
