  <script setup>
    import NavbarLink from 'src/components/NavbarLink.vue';
    import HomeView from 'src/components/HomeView.vue';
    import EducationView from 'src/components/EducationView.vue';
    import SkillsView from 'src/components/SkillsView.vue';
  </script>


<template>
  <NavbarLink />
  <router-view />
  <!-- <HomeView />
  <EducationView />
  <SkillsView /> -->
</template>

