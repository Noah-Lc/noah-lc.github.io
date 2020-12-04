<template>
  <section>
    <h2 class="section-title">{{ section.title }}</h2>
    <div class="section-head"></div>
    <div class="sections">
      <div class="section" v-for="(item, index) in section.items" v-bind:key="index">
        <h3 class="subtitle">
          <template v-if="item.timeperiod">{{ item.timeperiod }} - </template>
          {{ item.title }}
        </h3>
        <template v-if="item.descriptions">
          <div class="description" v-for="(decription, index) in item.descriptions" v-bind:key="index">
            <ul>
              <li class="text-muted" v-html="decription"></li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionRS',
  props: {
    section: Object
  }
}

</script>

<style>
.section-title{
    color: #217aad;
    padding-left: 38px;
}
.section-title:before{
    position: absolute;
    content: " ";
    background-color: #217aad;
    border:solid 1px #fff;
    margin-top: 7px;
    margin-left: -43px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    z-index: 10;
}
.section-head:before{
    position: absolute;
    content: "\A0";
    background-color: #217aad;
    margin-top: -15px;
    width: 2px;
    height: 35px;
}
.section:not(:last-child):before {
    position: absolute;
    content: "\A0";
    background-color: #217aad;
    margin-top: 7px;
    margin-left: -37.5px;
    width: 2px;
    height: 155%;
}
.section:last-child:before {
    position: absolute;
    content: "\A0";
    background-color: #FFF;
    margin-top: 7px;
    margin-left: -37.5px;
    width: 2px;
    height: 155%;
}
.section{
  position: relative;
  padding: 0px 0 5px 38px;
}
.subtitle:before {
    position: absolute;
    content: " ";
    background-color: #217aad;
    border:solid 1px #fff;
    margin-top: 6px;
    margin-left: -41px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
}
.description ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
    line-height: 1.4;
}
</style>
