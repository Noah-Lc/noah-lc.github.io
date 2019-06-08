<template>
  <section>
    <h2 class="section-title ">{{ section.title }}</h2>
    <div class="sections">
      <div class="section" v-for="item in section.items">
        <h3 class="subtitle">
          <template v-if="item.timeperiod">{{ item.timeperiod }} - </template>
          {{ item.title }}
        </h3>
        <template v-if="item.descriptions">
          <div class="description" v-for="decription in item.descriptions">
            <ul>
              <li class="text-muted">{{ decription }}</li>
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
    color: #2ea0e4!important;
    padding-left: 41px;
}
.section-title:before{
    position: absolute;
    content: " ";
    background-color: #2ea0e4!important;
    border:solid 1px #fff;
    margin-top: 7px;
    margin-left: -45.5px;
    width: 11px;
    height: 11px;
    border-radius: 100%;
}

.sections{
  margin-top: -20px;
  padding-top: 15px;
  border-left:2px solid #2ea0e4;
}

.section{
    padding: 0px 0 5px 38px;
}

.subtitle:before {
    position: absolute;
    content: " ";
    background-color: #2ea0e4!important;
    border:solid 1px #fff;
    margin-top: 6px;
    margin-left: -43px;
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
