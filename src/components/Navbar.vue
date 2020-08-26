<template>
  <div>
    <vs-navbar :shadow="!burgerActive" :square="burgerActive"
               fixed not-line padding-scroll>
      <template #left>
        <div class="md:hidden block mr-3">
          <i class="feather icon-menu text-xl cursor-pointer"
             @click="burgerActive = !burgerActive"
             :class="burgerActive ? 'hidden' : 'block'"></i>
          <i class="feather icon-x text-xl cursor-pointer"
             @click="burgerActive = !burgerActive"
             :class="burgerActive ? 'block' : 'hidden'"></i>
        </div>
        <router-link to="/" class="text-dark">KALA STORE</router-link>
      </template>
      <div class="hidden md:block responsive-nav">
        <vs-navbar-item to="/" :active="$route.name === 'Home'">
          Home
        </vs-navbar-item>
        <vs-navbar-item to="/shop"
                        :active="$route.name === 'Shop' || $route.name === 'Detail Product'">
          Shop
        </vs-navbar-item>
      </div>
      <template #right>
        <vs-button flat dark to="/add-product">Add Product</vs-button>
      </template>
    </vs-navbar>

    <div class="navbar-item-responsive"
         :class="burgerActive ? 'block' : 'hidden'">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/shop">
        Shop
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    burgerActive: false,
  }),
};
</script>

<style scoped>

</style>
