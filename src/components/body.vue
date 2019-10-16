<template>
  <div class="row">
    <div class="col-md-6">
      <SectionRS v-for="(section, index) in sections" v-if="!section.right" v-bind:section="section" v-bind:key="'section-left-' + index"/>
    </div>
    <div class="col-md-6">
      <SectionRS v-for="(section, index) in sections" v-if="section.right" v-bind:section="section" v-bind:key="'section-right-' + index"/>
    </div>
  </div>
</template>

<script>
import SectionRS from './section.vue'

export default {
  name: 'BodyRS',
  components: { SectionRS },
  data(){
    return {
      sections: [
          {
              right: false,
              title: 'EXPERIENCE',
              items: [
                  {
                      timeperiod: 2019,
                      title: 'DataFlex',
                      descriptions: [
                        'Work as an active member of a remote team, Dopweb.',
                        'Conception and Development of Mobile Application DawiDari.',
                        'Creation of a web API with ASP.NET Core MVC.',
                        'Development a Mobile App with Flutter.',
                      ]
                  },
                  {
                      timeperiod: '2016+',
                      title: 'Freelance Works',
                      descriptions: [
                        'Creation of Mobile Applications with Xamarin forms(C#) and Java.',
                        'Creation of Web Applications with Python(Django) and Angular.',
                        'Creation of Mobile Games 2D and 3D with Unity(C#).',
                      ]
                  },
                  {
                      timeperiod: 2016,
                      title: 'Ministry Of Justice',
                      descriptions: [
                        'Conception and Development of a Management Application.',
                        'Creation of ASP.NET Web Application Using MVC and Entity Framework.',
                        'Managment Project with Team Foundation Server (TFS)',
                      ]
                  }
              ]
          },
          {
              right: false,
              title: 'STUDIES',
              items: [
                  {
                      timeperiod: 2019,
                      title: 'Skills training',
                      descriptions: ['Analysis, Design, and Development Techniques with J2EE at NTIC.']
                  },
                  {
                      timeperiod: 2018,
                      title: 'Skills training',
                      descriptions: ['Web and Mobile Applications Development at NTIC.']
                  }, {
                      timeperiod: 2016,
                      title: 'Diplome Technicien Spécialisé',
                      descriptions: ['Specialized Technician Diploma in Software Development.']
                  },{
                      timeperiod: 2014,
                      title: 'Scientific Baccalaureate',
                      descriptions: ['High-school Diploma in Physics at Mohammed V High School, Sala al-Jadida']
                  }
              ]
          },
          {
              right: false,
              title: 'CERTIFICATIONS',
              items: [
                  {
                      timeperiod: 2018,
                      title: 'Udacity',
                      descriptions: ['Full Stack Developer']
                  }, {
                      timeperiod: 2016,
                      title: 'Microsoft® Specialist',
                      descriptions: ['Microsoft® Specialist: Programming in HTML5 with JavaScript and CSS3.']
                  }, {
                      timeperiod: 2016,
                      title: 'Microsoft® Specialist',
                      descriptions: ['Microsoft® Specialist: Programming in C#.']
                  }
              ]
          },
          {
              right: true,
              title: 'SKILLS',
              items: [
                  {
                      title: 'Teamwork and autonomy',
                      descriptions: ['Git, TFS.']
                  }, {
                      title: 'Technologies',
                      descriptions: ['Python, PHP, C#(.NET 4.5), C/C++, Java']
                  },
                  {
                      title: 'Web Technologies',
                      descriptions: ['Angular, Vue, REST']
                  }, {
                      title: 'Frameworks',
                      descriptions: ['Django, ASP.NET Core, Xamarin, J2EE']
                  },
                  {
                      title: 'DataBase',
                      descriptions: ['SQL, NoSQL']
                  }, {
                      title: 'DevOps and CI',
                      descriptions: ['Docker, Vagrant, Travis CI']
                  }, {
                      title: 'GameDev',
                      descriptions: ['Unity 3D, SDL, Tiled']
                  }, {
                      title: 'Learning new languages',
                      descriptions: [
                        'Mastery of MVC.',
                        'Mastery  HTTP REST With JSON.'
                    ]
                  }
              ]
          }, {
              right: true,
              title: 'EXPERTISE',
              items: [
                  {
                      title: 'Dynamic Websites Development',
                  }, {
                      title: 'Database Management',
                  }, {
                      title: 'Rest API Development',
                  }, {
                      title: 'Test Driven Development',
                  }
              ]
          },
      ]
    }
  }
}

</script>

<style amp-custom>
.section-title:before{
    position: absolute;
    content: " ";
    background-color: #217aad!important;
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
  border-left:2px solid #217aad;
}

.section{
    padding: 0px 0 5px 38px;
}

.subtitle:before {
    position: absolute;
    content: " ";
    background-color: #217aad!important;
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
