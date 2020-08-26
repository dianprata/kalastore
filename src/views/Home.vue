<template>
  <div id="home" class="home">
    <section id="jumbotron">
      <div class="container text-center">
        <h1 class="inline-block text-6xl border px-6 md:mb-5">
          KALA
        </h1>
        <h1 class="home-tagline">
          NOW: UP TO 75% <br>
          EXTRA 10% OFF
        </h1>
        <div class="divider md:my-12 my-6 mx-auto">
          <vs-divider />
        </div>
        <div class="flex flex-wrap justify-center">
          <div v-for="(cat,index) in catalog" :key="index" class="w-full md:w-1/4 p-2">
            <div class="img-catalog">
              <img v-if="catalog.length !== 0" :src="require(`@/assets/catalog/${cat.id}.jpg`)">
              <div class="hover-catalog">
                <div class="desc">
                  <p class="mt-2">
                    {{ cat.name }}
                  </p>
                  <p>IDR {{ cat.price | formatPrice }}</p>
                </div>
                <vs-button
                    border
                    color="#dae1e7"
                    class="rounded-lg"
                    @click="$router.push(`/shop/detail/${cat.id}`)"
                >
                  Detail
                </vs-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="products">
      <div class="container">
        <h1 class="font-rowdies text-3xl mb-4 px-2">
          Products
        </h1>
        <div class="flex flex-wrap">
          <div v-for="(product,index) in topProducts" :key="index" class="w-full md:w-1/5 p-2">
            <div class="img-catalog">
              <img :src="require(`@/assets/catalog/${product.id}.jpg`)">
              <div class="hover-catalog">
                <vs-button
                    border
                    color="#dae1e7"
                    class="rounded-lg"
                    @click="$router.push(`/shop/detail/${product.id}`)"
                >
                  Detail
                </vs-button>
              </div>
            </div>
            <div class="catalog-desc">
              <p class="mt-2">
                {{ product.name }}
              </p>
              <p>IDR {{ product.price | formatPrice }}</p>
            </div>
          </div>
        </div>
        <vs-button flat class="mt-4" block @click="$router.push('/shop')">
          See All
        </vs-button>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash';
import data from '../dataFake/products';

export default {
  name: 'Home',
  data: () => ({
    products: [],
  }),
  created() {
    this.products = data;
  },
  computed: {
    catalog() {
      const catalog = _.filter(this.products, (prd) => prd.review > 100);

      return catalog;
    },
    topProducts() {
      const topProducts = _.filter(this.products, (prd) => prd.review > 90);

      return topProducts;
    },
  },
};
</script>
