import '../styles/main.css';
import Vue from './vue.js'

var resumeData = {
    name: {
      first: 'Noah',
      middle: '',
      last: 'Belahcen',
      about: "I'm really like what i do and I have a lot of experience during many projects! I Have developed many mobile & web programs. Good communication skills and always willing to learn new technologies. Below are some of my technical skills.",
      position: 'FULL STACK DEVELOPER'
    },
    contact:[
      { type: 'adress', value: 'Sala al-Jadida, Rabat , Morocco' },
      { type: 'mail', value: 'Nouh.source@gmail.com' },
      { type: 'github', value: 'Github.com/Noah-lc', link: 'http://github.com/noah-lc' },
    ],
    hobbies: {
      title: 'HOBBIES',
      template: 'hobbies-section',
      items: [
          {
              title: 'Traveling',
          }, {
              title: 'Reading',
          }, {
              title: 'Programming',
          }, {
              title: 'Gaming',
          }]
    },
    sections: [
        {
            right: false,
            title: 'EXPERIENCE',
            items: [
                {
                    timeperiod: 2019,
                    title: 'Data Flex',
                    descriptions: [
                      'Conception and Development of Mobile Application DawiDari.',
                      'Creation a web API with ASP.NET Core MVC.',
                      'Development a Mobile App in Flutter.',
                    ]
                },
                {
                    timeperiod: '2016+',
                    title: 'Freelance Works',
                    descriptions: [
                      'Creation Mobile Applications with Xamarin forms(C#) and Java.',
                      'Creation Web Applications with Python(Django) and Angular.',
                      'Creation Mobile Games 2D and 3D with Unity(C#).',
                    ]
                },
                {
                    timeperiod: 2016,
                    title: 'Ministry Of Justice',
                    descriptions: [
                      'Conception and Development of Management Application.',
                      'Creation ASP.NET Web Application Using MVC And Entity Framework.',
                      'Managment Project with Team Foundation Server (TFS)',
                    ]
                }
            ]
        },
        {
            right: false,
            title: 'EDUCATION',
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
                    title: 'Gamedev',
                    descriptions: ['Unity, SDL, Tiled']
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
                    title: 'Development of dynamic websites',
                }, {
                    title: 'Database Management',
                }, {
                    title: 'Rest API development via Django Rest Framework.',
                }, {
                    title: 'Test Driven Development via Django Rest Framework.',
                }
            ]
        },
    ]};

Vue.component('resume-section', {
  props: ['section'],
  template: '#resume-section'
});

Vue.component('hobbies-section', {
  props: ['hobbies'],
  template: '#hobbies-section'
});

var resume = new Vue({
  el: '#resume',
  data: {
    picture: '',
    fullName: resumeData.name.first + " " + resumeData.name.last,
    position: resumeData.name.position,
    about: resumeData.name.about,
    contact: resumeData.contact,
    sections: resumeData.sections,
    hobbies: resumeData.hobbies
  }
});
