<template>
  <div>
    <div id="resume" class="row">
      <div class="col-md-4" id="title">
        <amp-img src="../src/assets/img/avatar.png" layout="responsive" alt="avatar" height="238" width="250" id="avatar"></amp-img>
        <h1 class="text-monospace">{{ name.first + " " + name.last }}</h1>
        <p class="text-muted" id="position"><span>{{ name.position }}</span></p>
      </div>
      <div class="col-md-8">
        <div class="item-contact">
          <div v-for="item in contact" class="text-muted contact" v-bind:class="item.type">
            <template v-if="item.link" >
              <a :href="item.link">{{ item.value }}</a>
            </template>
            <template v-else>
              {{ item.value }}
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6 col-centered">
        <div class="text-muted" id="about">
           {{ name.about }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'HeaderRS',
  data(){
    return {
      name: {
        first: 'Noah',
        middle: '',
        last: 'Belahcen',
        about: "I am a full stack developer, I work projects concerning mobile app development and web development. For the moment, I am working as a freelancer and as a software engineer in a private company. I am always ready to learn new technologies and start new projects. For any other information, feel free to contact me.",
        position: 'FULL STACK DEVELOPER'
      },
      contact:[
        { type: 'adress', value: 'Sala al-Jadida, Rabat , Morocco' },
        { type: 'mail', value: 'Nouh.source@gmail.com' },
        { type: 'github', value: 'Github.com/Noah-lc', link: 'http://github.com/noah-lc' },
      ],
    }
  }
}
</script>

<style amp-custom>
#resume{
  padding-top: 20px;
}

#avatar{
  display: inline-block;
  content: ' ';
  background-size: 250px;
  height: 238px;
  width: 250px;
}

#title{
  text-align: center;
  line-height: 80%;
}

#position {
    text-align: center;
    text-transform: uppercase;
    position: relative;
}
#position:before {
    border-top: 1px solid #dfdfdf;
    content:"";
    margin: 0 auto;
    position: absolute;
    top: 50%; left: 0; right: 0; bottom: 0;
    width: 90%;
    z-index: -1;
}
#position span {
    background: #fff;
    padding: 0 15px;
}

#about{
  text-align: center;
  padding: 20px 30px 0 30px;
}

.col-centered{
    float: none;
    margin: 0 auto;
}

.text-muted{
    color: #6c757d!important;
    font-size: 13px;
}

.text-muted a, .text-muted a:hover {
    color: inherit;
}

@media screen and (min-width: 750px) {
  .item-contact{
      padding: 15px 140px;
      text-align: right;
  }

  .item-contact div:after {
    display: inline-block;
    content: ' ';
    background-size: 15px;
    height: 15px;
    width: 15px;
    margin-bottom: -3px;
    margin-left: 8px;
  }

  .item-contact .adress:after{
      background-image: url('./../assets/img/adress.svg');
  }
  .item-contact .github:after{
      background-image: url('./../assets/img/github.svg');
  }
  .item-contact .mail:after{
      background-image: url('./../assets/img/mail.svg');
  }
}

@media screen and (max-width: 750px) {
  .item-contact{
      text-align: left;
      padding: 15px 15px;
  }

  .item-contact div:before {
    display: inline-block;
    content: ' ';
    background-size: 15px;
    height: 15px;
    width: 15px;
    margin-bottom: -3px;
    margin-right: 8px;
  }

  .item-contact .adress:before{
      background-image: url('./../assets/img/adress.svg');
  }
  .item-contact .github:before{
      background-image: url('./../assets/img/github.svg');
  }
  .item-contact .mail:before{
      background-image: url('./../assets/img/mail.svg');
  }
}
</style>
