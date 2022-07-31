<template>
  <h1 class="title">Bionic Text Converter</h1>
  <div class="field">
    <input placeholder="Type your text" name="content" id="content" type="text" v-model="content">
    <label for="content">Type your text</label>
  </div>
  <article>
    <bionic-text :content="content" />
  </article>
</template>

<script>
import BionicText from './components/BionicText.vue';
export default {
  name: 'App',
  data() {
    return {
      content: ''
    };
  },
  components: {
    BionicText
  }
}
</script>

<style>
@import url('./assets/styles/main.css');
@import url('./assets/styles/animation.css');


.field {
  animation: fadeIn 3s ease-in-out;
  width: 50%;
  margin: 10px auto 0;
  padding: 15px 0 0;
  position: relative;
}

.field input {
  width: 100%;
  padding: 7px 0;
  font-size: 1.3rem;
  border: 0;
  outline: 0;
  color: var(--color-quinary);
  background: transparent;
  border-bottom: 2px solid var(--color-quinary);
}

.field label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
}

.field input::placeholder {
  color: transparent;
}

.field input:placeholder-shown+label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.field input:focus {
  border-width: 3px;
}

.field input:focus+label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: var(--color-primary);
}

h1.title {
  letter-spacing: 5px;
  text-shadow: 3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary),
    9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary);
  animation: fadeIn 1s ease-in;
  font-size: 85px;
}

article {
  width: 50%;
  margin: 50px auto;
  text-align: left;
  word-break: break-all;
}
</style>
