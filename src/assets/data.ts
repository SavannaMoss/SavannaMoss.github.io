import { College }       from "../models/College";
import { Course }        from "../models/Course";
import { Organization }  from "../models/Organization";
import { Project }       from "../models/Project";
import { Experience }    from "../models/Experience";
import { SkillCategory } from "../models/SkillCategory";

export class Data {
  // GENERAL INFO
  public static NAME: string = 'Savanna Moss';
  public static GITHUB: string = 'https://github.com/savannamoss';
  public static LINKEDIN: string = 'https://www.linkedin.com/in/savanna-moss';

  // EDUCATION
  public static COLLEGE: College = {
    name: 'Florida Southern College',
    graduation: 'May 2022',
    major: 'Computer Science',
    concentrations: ['AI & Machine Learning', 'Web & Cloud Computing'],
    minor: 'Mathematics',
    honors: 'summa cum laude',
    awards: [
      {
        name: 'Dean\'s List',
        semesters: ['Fall \'18', 'Fall \'19', 'Fall \'21', 'Spring \'22',]
      },
      {
        name: 'President\'s Scholar',
        semesters: ['Spring \'19', 'Spring \'20', 'Fall \'20', 'Spring \'21',]
      }
    ]
  };

  public static COURSES: Course[] = [
    {
      title: 'Introduction to Computer Science ',
      stack: ['Python']
    },
    {
      title: 'Programming and Data Structures ',
      stack: ['Java']
    },
    {
      title: 'Analysis of Algorithms ',
      stack: ['Java', '']
    },
    {
      title: 'Software Engineering ',
      stack: ['HTML', 'CSS', 'JavaScript', 'VueJS']
    },
    {
      title: 'Computer Organization and Architecture',
      stack: []
    },
    {
      title: 'Operating Systems and Concurrency ',
      stack: ['Java']
    },
    {
      title: 'Introduction to Artificial Intelligence ',
      stack: ['Python']
    },
    {
      title: 'Machine Learning',
      stack: ['Python']
    },
    {
      title: 'Advanced Topics in Artificial Intelligence ',
      stack: ['Python']
    },
    {
      title: 'Introduction to Web Development',
      stack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Web Application Architectures',
      stack: ['HTML', 'CSS', 'JavaScript', 'VueJS']
    },
    {
      title: 'Introduction to Web Development ',
      stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL']
    },
    {
      title: 'Database Management Systems',
      stack: ['SQL']
    },
    {
      title: 'Computer Game Design',
      stack: ['Godot Engine', 'GDScript']
    },
    {
      title: 'Senior Project',
      stack: ['HTML', 'CSS', 'TypeScript', 'PHP', 'SQL', 'Angular']
    }
  ]

  public static ORGANIZATIONS: Organization[] = [
    {
      name: 'Computer Science Club',
      position: 'President'
    },
    {
      name: 'Association of Campus Entertainment',
      position: 'Director of Southern Cinema'
    },
    {
      name: 'Multicultural Student Council',
      position: 'Member'
    },
    {
      name: 'Astronomy Club',
      position: 'Member'
    },
    {
      name: 'Phi Sigma Tau International Philosophy Honor Society, Theta Chapter',
      position: 'Member'
    },
    {
      name: 'Rewriting the Code',
      position: 'Member'
    }
  ]

  // PROJECTS
  public static PROJECTS: Project[] = [
    {
      name: 'JIS Orthopedics Location Finder',
      semester: 'Spring 2022',
      description: 'Utilizing VueJS, Firebase, and the Bootstrap framework to develop a web application for JIS Orthopedics to use internally when booking appointments for patients.',
    },
    {
      name: 'CTR Creative Project',
      semester: 'Spring 2022',
      description: '',
      link: {
        name: 'GitHub Page',
        url: 'https://savannamoss.github.io/ctr-creative-project/'
      }
    },
    {
      name: 'Radical Revision',
      semester: 'Fall 2021',
      description: '',
      link: {
        name: 'GitHub Page',
        url: 'https://savannamoss.github.io/RadicalRevision/'
      }
    },
    {
      name: 'TapMaps 2.0',
      semester: 'Fall 2021',
      description: 'Utilizing the Google Maps API, Angular, MySQL, PHP, and Bootstrap to develop a web application. We created a proof of concept for a larger-scale service based on our college campus for a localized, information-filled, interactive map. Initially based on a prior project of the same name.',
    },
    {
      name: 'Broad Strokes: Artwork Classification',
      semester: 'Fall 2020',
      description: 'Developed a convolutional neural network, a k-nearest neighbors classifier, and a support vector machine (Python) with a group of peers to predict an artist based on images of artworks. We wrote a paper to describe our project, outcomes, and future improvements.',
      link: {
        name: 'GitHub Repo',
        url: 'https://github.com/SavannaMoss/BroadStrokes'
      }
    },
    {
      name: 'onCourse',
      semester: 'Fall 2020',
      description: 'Utilizing MySQL, PHP, and Bootstrap to develop a website for students to manage courses they have taken and specific General Education credits they need to graduate on time.',
      link: {
        name: 'GitHub Repo',
        url: 'https://github.com/SavannaMoss/onCourse'
      }
    },
    {
      name: 'Gin Rummy AI PLayer',
      semester: 'Summer 2020',
      description: 'Developed a Gin Rummy AI player (Java) for the EAAI Undergraduate Research Challenge with two professors and a classmate. After submitting the AI player to the competition, we wrote a paper to discuss our research, process, and outcomes.',
      link: {
        name: 'Paper',
        url: 'https://www.aaai.org/AAAI21Papers/EAAI-66.EicholtzM.pdf'
      }
    },
    {
      name: 'TapMaps',
      semester: 'Spring 2020',
      description: 'Utilizing the Google Maps API, VueJS, and Firebase Firestore to develop a web application called TapMaps. We created a proof of concept based on our college campus for a localized, information-filled, interactive map.',
      link: {
        name: 'GitHub Repo',
        url: 'https://github.com/SavannaMoss/TapMaps'
      }
    }
  ]

  // EXPERIENCE
  public static EXPERIENCES: Experience[] = [
    {
      company: 'FedEx Services',
      department: 'FXF Rating Modernization Department',
      location: 'Remote',
      start: 'June 2022',
      end: 'Present',
      position: 'Full Stack Developer',
      description: [
        '',
        '',
        ''
      ]
    },
    {
      company: 'FedEx Services',
      department: 'FXF Pricing and Rating Modernization Department',
      location: 'Remote',
      start: 'June 2021',
      end: 'December 2021',
      position: 'Information Technology Intern',
      description: [
        'Participating in daily stand-up meetings.',
        'Learning how to effectively use new technologies such as Angular and Spring Boot.',
        'Working with a team of fellow interns to modernize and rebuild a legacy web application.',
        'Developing an Angular frontend utilizing Angular Material.',
        'Developing a REST API backend with Spring Boot (Java) to interface between the Angular frontend and DB2 SQL database.',
        'Developing comprehensive unit tests for the frontend with Jasmine and Karma, as well as the backend with JUnit and Mockito to meet and exceed 80% code coverage requirement.',
        'Working with the team to manage code conflicts, version control, and unexpected bugs.',
        'Working with the team and mentors to prepare the web application for the production and deployment pipeline.'
      ]
    },
    {
      company: 'Florida Southern College',
      department: 'Teaching & Learning Center',
      location: 'Lakeland, FL',
      start: 'January 2019',
      end: 'May 2022',
      position: 'TechBuddy Manager',
      description: [
        'Technology Committee, <emphasis>Member</emphasis>',
        'Creating work schedules on a semesterly basis.',
        'Handling incoming calls and emails.',
        'Assisting faculty, staff, and students in navigating and utilizing the FSC Portal, Canvas, projection, and SmartBoard software.',
        'Assisting with technical difficulties during faculty Canvas training.',
        'Working with other TechBuddies to solve more difficult problems efficiently.',
        'Reporting interactions with faculty, staff, and students to the TechBuddy supervisor.',
        'Using Microsoft Office Suite with proficiency.',
      ]
    }
  ]

  // SKILLS
  public static SKILLS: SkillCategory[] = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'SQL'],
    },
    {
      category: 'Frameworks',
      skills: ['Angular', 'VueJS', 'Bootstrap'],
    },
    {
      category: 'Software',
      skills: ['IntelliJ IDEA', 'WebStorm', 'GitHub', 'Microsoft Office Suite'],
    },
    {
      category: 'General',
      skills: ['Time Management', 'Leadership', 'Teamwork', 'Creative Problem Solving', 'Interpersonal Communication', 'Critical Thinking', 'Project Management', 'Organization'],
    }
  ]
}
