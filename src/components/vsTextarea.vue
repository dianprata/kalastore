<template>
  <div class="vs-component vs-con-textarea vs-textarea-primary"
       style="border: 1px solid rgba(0, 0, 0, 0.08);"
       :style="{height: height}"
  >
    <textarea class="vs-textarea" :rows="rows"
              :placeholder="label"
              :value="value"
              @keyup="charCount"
              @input="$emit('input', $event.target.value)">
    </textarea>
    <div class="count vs-textarea--count" :class="{'hidden': counter === 0}">
      {{value.length}} / {{counter}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vsTextarea',
  props: {
    height: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
    rows: {
      default: '5',
      type: String,
    },
    value: {
      default: '',
      type: String,
    },
    counter: {
      default: 0,
      type: Number,
    },
  },
  methods: {
    charCount() {
      if (this.value.length >= this.counter) {
        this.value = this.value.substring(0, this.counter);
      }
    },
  },
};
</script>

<style scoped>

</style>
