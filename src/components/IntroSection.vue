<template>
    <div id="intro">
      <div class="intro-container">
        <h1>Tiffany Cheng:</h1>
        <p>A Front-end Developer, UI/UX Designer, and UX Specialist<span class="next-line"> </span>
        with over 8 years of professional experience- a <span class="rainbow">unicorn</span> of sorts.</p>
        <p>#opentowork</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'IntroSection',
  props: {}
}
</script>

<style>
@media (min-width: 600px){
  .next-line {
    display: block;
  }
}

#intro {
  height: calc(75vh - 4rem);
  min-height: 250px;
  max-height: 400px;
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem;
}
.intro-container {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.rainbow {
  font-weight: 900;
  background: linear-gradient(to right, #C021AD, #05B091, #7924B3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>