<template>
  <div class="row">
    <div class="col-md-6">
      <SectionRS v-for="(section, index) in sections.filter(x => !x.right)" v-bind:section="section" v-bind:key="'section-left-' + index"/>
    </div>
    <div class="col-md-6">
      <SectionRS v-for="(section, index) in sections.filter(x => x.right)" v-bind:section="section" v-bind:key="'section-right-' + index"/>
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
                        timeperiod: '04/2018 → CURRENT',
                        title: 'DataFlex',
                        descriptions: [
                            'Working as an active member of a remote team <strong>(ReactJs, Stitches, Storybook)</strong>, <u><a href="https://sho.ai/">Sho.ai</a></u>.',
                            'Work as an active member of a remote team <strong>(VueJs, Asp Core)</strong>, <u><a href="https://www.77diamonds.com/">77Diamonds</a></u>.',
                            'Work as an active member of a remote team <strong>(Angular)</strong>, <u><a href="https://dopweb.com/">Dopweb</a></u>.',
                            'Conception and Development of Mobile Application DawiDari.',
                            'Creation of a web API with <strong>ASP.NET Core</strong> MVC.',
                            'Development a Mobile App with <strong>Flutter</strong>.',
                        ]
                    },
                    {
                        timeperiod: '2016 → 2018',
                        title: 'Freelance Works',
                        descriptions: [
                            'Creation of Mobile Applications with <strong>Xamarin</strong> and <strong>Java</strong>.',
                            'Creation of Web Applications with <strong>Python(Django)</strong> and <strong>Angular</strong>.',
                            'Creation of Mobile Games 2D and 3D with <strong>Unity(C#)</strong>.',
                        ]
                    },
                    {
                        timeperiod: 2016,
                        title: 'Ministry Of Justice',
                        descriptions: [
                            'Conception and Development of a Management Application.',
                            'Creation of <strong>ASP.NET</strong> Web Application Using MVC and Entity Framework.',
                            'Managment Project with Team Foundation Server (TFS)',
                        ]
                    }
                ]
            },
            {
                right: true,
                title: 'PROJECTS',
                items: [
                    {
                        timeperiod: '2020',
                        title: '7imyah.com',
                        descriptions: [
                            'Setup and Deploy Website in a <strong>Docker</strong> environment.',
                            'Creation of an Interactive Dashboards in <strong>Angular</strong>.',
                            'Creation of the web interface with <strong>AMP</strong> technology, <u><a href="http://7imyah.com/">7imyah</a></u>',
                            'Creation of the web API with <strong>Node Js</strong>.',
                            'Project conception and development using <strong>MEAN</strong> stack.',
                        ]
                    }
                ]
            },
            {
                right: false,
                title: 'STUDIES',
                items: [
                    {
                        timeperiod: 2022,
                        title: 'Information Systems Engineering',
                        descriptions: [
                            'Database administrator.',
                            'IS Project Manager.',
                            'IS study and development consultant.'
                        ]
                    },
                    {
                        timeperiod: 2020,
                        title: 'Computer System Engineering',
                        descriptions: [
                            'Mastery of statistical and data analysis methods.',
                            'Participate in data engineering project for decision making.'
                        ]
                    },
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
                        title: 'Specialized Technician Diploma',
                        descriptions: ['Specialized Technician Diploma in Software Development.']
                    },{
                        timeperiod: 2014,
                        title: 'Scientific Baccalaureate',
                        descriptions: ['High-school Diploma in Physics']
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
                        descriptions: ['Git, TFS, Jira, Trello, Asana']
                    }, {
                        title: 'Technologies',
                        descriptions: ['C#, TypeScript, JavaScript, NodeJs']
                    }, {
                        title: 'Web Technologies',
                        descriptions: ['Stitches, AMP, REST, GraphQL']
                    }, {
                        title: 'Frameworks',
                        descriptions: ['Angular, VueJs, ReactJs, ASP.NET Core']
                    }, {
                        title: 'DataBase',
                        descriptions: ['SQL Server, PostgreSQL, MongoDB']
                    }, {
                        title: 'DevOps and CI',
                        descriptions: ['Docker, Vagrant, Travis CI']
                    }, {
                        title: 'Servers',
                        descriptions: ['Windows Server, AWS']
                    }
                ]
            },
            {
                right: true,
                title: 'EXPERTISE',
                items: [
                    {
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