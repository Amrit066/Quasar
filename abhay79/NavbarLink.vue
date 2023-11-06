<script setup>
import { ref } from 'vue'

const linksList = ref(
  [
    {
      title: 'Home',
      icon: 'https://cdn-icons-png.flaticon.com/128/263/263115.png',
      link:'http://localhost:8001/#/home'
    },
    {
      title: 'Education',
      icon: 'https://cdn-icons-png.flaticon.com/128/3074/3074058.png',
      link:'http://localhost:8001/#/education'
    },
    {
      title: 'Skills',
      icon: 'https://cdn-icons-png.flaticon.com/128/9583/9583761.png',
      link:'http://localhost:8001/#/skills'
    },
    {
      title: 'Hobby',
      icon: 'https://cdn-icons-png.flaticon.com/128/2853/2853364.png',
      link:'http://localhost:8001/#/hobby'
    }
])

</script>

<template>
  <div class="navbar-container">
    <div  class="navbar-content">
      <div class="content" v-for="link in linksList" :key="link.id">
        <!-- <router-link :to="{name: link['link']}">
          <div class="link">
            <img v-bind:src="link['icon']"/>
            <h4>{{ link['title'] }}</h4>
          </div>
        </router-link> -->
        <!-- <div class="link">
            <img v-bind:src="link['icon']"/>
            <h4>{{ link['title'] }}</h4>
          </div> -->

          <q-item
      clickable
      tag="a"
      target="_self"
      :href="link['link']"
    >
    <div class="link">
            <img v-bind:src="link['icon']"/>
            <h4>{{ link['title'] }}</h4>
          </div>
    </q-item>
      </div>
    </div>
  </div>
</template>

<style scoped>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/* .navbar-container{
  background-color: #D0A2F7;
} */
  .navbar-content{
    background-color: #D0A2F7;
    margin: 0.5rem 1rem;
    padding: 0.5rem 0.5rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content{
    /* border: 2px solid red; */
    padding: 0rem 1rem;
  }

  .link{
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* border: 2px solid rgb(77, 255, 0); */
      padding: 0;
      transition: all 300ms;
    }

    .link:hover{
      cursor: pointer;
      transform: scale(1.1);
    }

    .link img{
      width: 1.5rem;
      height: 1.5rem;
    }
    .link h4{
      font-size: 1rem;
      margin-left: 0.3rem;
    }
</style>

