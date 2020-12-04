<template>
  <div class="col-md-12">
  <section class="interests">
    <h2 class="interests-title">{{ interests.title }}</h2>
      <template v-for="(interest, index) in interests.items">
        <span v-bind:key="index">{{ interest.title }} </span>
      </template>
  </section>
</div>
</template>

<script>
export default {
  name: 'FooterRS',
  data(){
    return {
      interests: {
        title: 'INTERESTS',
        template: 'interests-section',
        items: [
            {
                title: 'Traveling,',
            }, {
                title: 'Reading,',
            }, {
                title: 'Programming,',
            }, {
                title: 'Gaming',
            }]
      }
    }
  }
}
</script>

<style>
.interests{
  text-align: center;
  padding-bottom: 100px;
}

.interests-title{
    color: #217aad!important;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.interests span {
  font-size: 1.12em;
  font-weight: bold;
  margin-bottom: .5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
</style>
