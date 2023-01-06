<template>
  <header>
    <div>
      <img src="@/assets/port.jpg" id="profile">
      <span class="hidden-xs">{{msg}}</span>
    </div>
    <ul>
      <li v-for="link in links" :key="link" :class="link.classes">
        <a :href="link.url">{{link.title}}</a>
      </li>
    </ul>
  </header>
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
        'title': 'Portfolio v1',
        'url': '/portfolio/old'
      },
      {
        'title': 'About Me',
        'url': '#'
      },
      {
        'classes': 'button',
        'title': 'Download Resume',
        'url': '@/assets/TiffanyCheng_resume.pdf'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 600px){
  .hidden-xs {
    display: none;
  }
}
header {
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  padding: 1rem;
  padding-bottom: 35%;
}
img#profile {
  border-radius: 50%;
  width: 75px;
  vertical-align: middle;
  margin-right: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
li.button a {
  display: block;
  border-radius: 8px;
  background-color: #04265E;
  color: #fff;
  text-decoration: none;
  padding: .5rem 1rem;
  margin-left: 1rem;
  box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.2);
}
li.button a:hover {
  box-shadow: none;
}
a {
  color: #178572;
}
</style>
