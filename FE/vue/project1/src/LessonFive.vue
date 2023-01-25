<template>
  <div>
    <hr>
        <div>
            <p>LessongFive.vue파일입니다.</p>
            <div>
                <p>프로그램 : {{web}}</p>
                <p>프로그램1 : {{web[0]}}</p>
                <p>프로그램2 : {{web[1]}}</p>
                <p>프로그램3 : {{web[2]}}</p>
                <p>프로그램4 : {{web[3]}}</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props : { //props : {데이터이름:자료형이름} String,Array,Number
        web : Array,
    }
}
</script>

<style>

</style>