<template>
  <div>
    <div id="routerwrap">
        <ul>
            <li><router-link to="/link1">링크1</router-link></li>
            <li><router-link to="/link2">링크2</router-link></li>
            <li><router-link to="/link3">링크3</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#routerwrap{
    height:250px;
}
#routerwrap ul li a{
    text-decoration:none;
    color:red;
}
#routerwrap ul li a:hover{
    text-decoration:underline;
    color:blue;
}
</style>