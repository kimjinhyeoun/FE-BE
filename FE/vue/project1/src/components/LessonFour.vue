<template>
  <div> <!-- information.js랑 연결함 -->
    <div>
        <h4 :style="red">{{data[0].title}}</h4>
        <p>{{data[0].price}}</p>
        <p>{{data[0].content}}</p>
    </div>
    <div>
        <h4 :style="red">{{data[1].title}}</h4>
        <p>{{data[1].price}}</p>
        <p>{{data[1].content}}</p>
    </div>
    <div>
        <h4 :style="red">{{data[2].title}}</h4>
        <p>{{data[2].price}}</p>
        <p>{{data[2].content}}</p>
    </div>
    <hr>
    <div v-for="(list, i) in data" :key="i">
        <h4 :style="red">{{data[i].title}}</h4>
        <p>{{data[i].price}}</p>
        <p>{{data[i].content}}</p>
    </div>
    <hr>
    <div v-for="(list, i) in data" :key="i">
        <h4 :style="red">{{list.title}}</h4>
        <p>{{list.price}}</p>
        <p>{{list.content}}</p>
    </div>
  </div>
</template>

<script>
import data from '../assets/information.js';
export default {
    data() {
        return {
            data : data,
            red : 'color:red',
        }
    },
}
</script>

<style>

</style>