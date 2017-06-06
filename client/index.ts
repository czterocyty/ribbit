import Vue from 'vue';

let v = new Vue({
  el: '#app',
  template: `
    <div>
        Name: <input v-model="name" type="text">        
    </div>
    `,
  data: { name: 'World' }
});
