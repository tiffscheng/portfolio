<template>
  <HeadComponent msg="Hi, I'm Tiffany :)"/>
  <img src="@/assets/icons/elliecorn2.svg" id="elliecorn">
  <div class="link-pv1" v-if="scrollpx > 300">
    <p>See <b>project details and contact options</b> in the old version of my portfolio:</p>
    <a href="/portfolio/old">Portfolio v1 ></a></div>
  <main>
    <IntroSection></IntroSection>
    <div class="scroll-down">
      <a href="#samples">See my work</a><br>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 50 25" class="bounce">
        <g id="chevron-down" data-name="chevron-down" transform="translate(50 25) rotate(180)" fill="none">
          <path d="M22.172,2.828a4,4,0,0,1,5.657,0L43.172,18.172A4,4,0,0,1,40.343,25H9.657a4,4,0,0,1-2.828-6.828Z" stroke="none"/>
          <path d="M 25 3.656845092773438 C 24.46578025817871 3.656845092773438 23.96353912353516 3.864885330200195 23.58577919006348 4.242635726928711 L 8.242641448974609 19.58578491210938 C 7.365840911865234 20.46259498596191 7.689128875732422 21.47573471069336 7.809101104736328 21.76536560058594 C 7.929061889648438 22.05499649047852 8.416858673095703 22.99999618530273 9.656848907470703 22.99999618530273 L 40.3431510925293 22.99999618530273 C 41.5831298828125 22.99999618530273 42.07093048095703 22.05499649047852 42.19089889526367 21.76536560058594 C 42.31087112426758 21.47573471069336 42.63415908813477 20.46259498596191 41.75736236572266 19.58578491210938 L 26.41420936584473 4.242635726928711 C 26.03644943237305 3.864885330200195 25.53421020507812 3.656845092773438 25 3.656845092773438 M 24.99999809265137 1.656850814819336 C 26.0236873626709 1.656850814819336 27.0473747253418 2.047374725341797 27.82842063903809 2.828424453735352 L 43.17156982421875 18.17157554626465 C 45.69142913818359 20.69143486022949 43.90676116943359 24.99999618530273 40.3431510925293 24.99999618530273 L 9.656848907470703 24.99999618530273 C 6.093231201171875 24.99999618530273 4.308570861816406 20.69143486022949 6.82843017578125 18.17157554626465 L 22.17156982421875 2.828424453735352 C 22.9526195526123 2.047374725341797 23.97631072998047 1.656850814819336 24.99999809265137 1.656850814819336 Z" stroke="none" fill="#7924b3"/>
        </g>
      </svg>
    </div>
    <WorkSamples></WorkSamples>
  </main>
</template>

<script>
import HeadComponent from './components/HeadComponent.vue'
import IntroSection from './components/IntroSection.vue'
import WorkSamples from './components/WorkSamples.vue'

export default {
  name: 'App',
  components: {
    HeadComponent,
    IntroSection,
    WorkSamples
  },
  data() {
    return {
      scrollpx: 0
    };
  },
  methods: {
    handleScroll() {
      this.scrollpx = window.scrollY;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

html,body {
  height: 100%;
  background-color: #04265E;
  /* background: #fff url('@/assets/construction-tape.png') no-repeat left bottom; */
  font-family: "Roboto",Helvetica,Arial,sans-serif;
  font-weight: 300;
  color: #011A36;
  margin: 0;
}
h1, h2 {
  font-family: "Roboto Slab",serif;
  font-weight: normal;
}
#elliecorn {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  height: 150px;
  z-index: 4;
}
.link-pv1 {
  width: 200px;
  line-height: 1.5rem;
  position: fixed;
  right: 5rem;
  bottom: calc(150px + 2rem);
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #404040;
  padding: 1rem;
  box-shadow: 2px 3px 4px 0 rgba(0,0,0,0.2);
  z-index: 3;
}
.link-pv1 p {
  margin-top: 0;
}
.link-pv1 a {
  background-color: #178572;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  padding: .5rem 1rem;
  box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.2);
}
.link-pv1::before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #404040;
  border-bottom: 10px solid transparent;
  right: 1rem;
  bottom: -20px;
  filter:
    drop-shadow(2px 4px 4px rgba(0,0,0,0.2));
}
.link-pv1::after {
 content: "";
 width: 0px;
 height: 0px;
 position: absolute;
 border-left: 10px solid transparent;
 border-right: 10px solid transparent;
 border-top: 10px solid #fff;
 border-bottom: 10px solid transparent;
 right: 1rem;
 bottom: -19px;
}
main {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24);
  width: calc(100% - 2rem);
  max-width: 1080px;
  margin: -35% auto 1rem auto;
}
main::after {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.5) url('@/assets/construction-tape-top.png') left top no-repeat;
  background-size: contain;
  z-index: 2;
  pointer-events: none;
}
@media (max-width: calc(1080px + 2rem)){
  main {
    margin: -35% 1rem 1rem 1rem;
  }
}

.scroll-down {
  text-align: center;
}
.scroll-down a {
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  color: #7924B3;
  text-decoration: none;
}
.bounce {
  animation: bounce 3s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0%,
  25%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(10px);
  }
  65% {
    transform: translateY(4px);
  }
}
</style>
