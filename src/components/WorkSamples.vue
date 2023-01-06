<template>
    <div id="samples">
      <div class="container">
          <div class="row">
            <h2>Web Samples</h2>
            <img src="@/assets/mockups/investor.png">
            <img src="@/assets/mockups/dashboard.png">
            <img src="@/assets/mockups/real-result.png">
            <img src="@/assets/mockups/smkbiz.png">
            <img src="@/assets/mockups/smk-team.png">
            <img src="@/assets/mockups/tekshield.png">
          </div>
          <div class="row">
            <h2>Mobile Samples</h2>
            <img src="@/assets/mockups/notifications.png">
            <img src="@/assets/mockups/notifications.jpg">
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'WorkSamples',
  props: {}
}
</script>

<style scoped>
#samples {
  margin-top: 4rem;
  padding: 1rem;
}
.row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;
}
.row::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: -2rem;
  right: -2rem;
  height: 100%;
  width: calc(100% + 4rem);
  margin: 0 auto;
  border: 1px solid #05B091;
  border-radius: 8px;
}
.row h2 {
  flex-basis: 100%;
}
.row img {
  width: 330px;
}
</style>