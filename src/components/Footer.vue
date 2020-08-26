<template>
  <footer class="footer">
    <div class="container footer-wrapper">
      <div class="flex md:flex-no-wrap flex-wrap">
        <div class="w-full md:w-3/12 p-2">
          <h1 class="font-rowdies text-5xl">
            KALA
          </h1>
          <p class="mb-2">
            1717 Harrison St. San Fransisco, CA 94103, USA
          </p>
        </div>
        <div class="w-full md:w-2/12 p-2">
          <p class="font-semibold text-lg mb-6">
            MAIN MENU
          </p>
          <router-link to="/" class="mb-2">
            Home
          </router-link>
          <router-link to="#" class="mb-2">
            About
          </router-link>
          <router-link to="/shop" class="mb-2">
            Shop
          </router-link>
          <router-link to="#" class="mb-2">
            Help
          </router-link>
        </div>
        <div class="w-full md:w-2/12 p-2">
          <p class="font-semibold text-lg mb-6">
            COMPANY
          </p>
          <router-link to="#" class="mb-2">
            The Company
          </router-link>
          <router-link to="#" class="mb-2">
            Careers
          </router-link>
          <router-link to="#" class="mb-2">
            Press
          </router-link>
        </div>
        <div class="w-full md:w-2/12 p-2">
          <p class="font-semibold text-lg mb-6">
            DISCOVER
          </p>
          <router-link to="#" class="mb-2">
            The Team
          </router-link>
          <router-link to="#" class="mb-2">
            Our History
          </router-link>
          <router-link to="#" class="mb-2">
            Brand Motto
          </router-link>
        </div>
        <div class="w-full md:w-3/12 p-2">
          <p class="font-semibold text-lg mb-6">
            FIND US ON
          </p>
          <router-link to="#" class="mb-2">
            Facebook
          </router-link>
          <router-link to="#" class="mb-2">
            Twitter
          </router-link>
          <router-link to="#" class="mb-2">
            Instagram
          </router-link>
        </div>
      </div>
    </div>
    <div class="copyright-wrapper">
      <p>&copy; Copyright 2020 KALA</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>

</style>
