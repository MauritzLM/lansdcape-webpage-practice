// service images
import service_1_large from './images/service1-large.jpg';
// import service_1_mobile from './images/service1-mobile.jpg';
import service_2_large from './images/service2-large.png';
// import service_2_mobile from './images/service2-mobile.png';

// project images
import project_1_image from './images/project1.png';
import project_2_image from './images/project2.png';
import project_3_image from './images/project3.png';


// services
export const services = [
    {
        id: 101,
        name: 'Garden Design',
        description: 'Our Lanscape designers will design the garden of your dreams',
        image_mobile: '',
        image_large: service_1_large,
        imgAlt: 'text'
    },
    {
        id: 102,
        name: 'Garden Maintenance',
        description: 'Our maintenance services will ensure your garden looks better than ever',
        image_mobile: '',
        image_large: service_2_large,
        imgAlt: 'text'
    }
];


// projects
export const projects = [
    {
        id: 1,
        title: 'project title',
        testimonial: '"Et leo duis ut diam quam. Vel elit scelerisque mauris pellentesque. Euismod elementum nisi quis eleifend quam adipiscing vitae. Iaculis eu non diam phasellus vestibulum."',
        clientName: '- client 1',
        image: project_1_image,
        imgAlt: 'text'
    },
    {
        id: 2,
        title: 'project title',
        testimonial: '"Et leo duis ut diam quam. Vel elit scelerisque mauris pellentesque. Euismod elementum nisi quis eleifend quam adipiscing vitae. Iaculis eu non diam phasellus vestibulum."',
        clientName: '- client 2',
        image: project_2_image,
        imgAlt: 'text'
    },
    {
        id: 3,
        title: 'project title',
        testimonial: '"Et leo duis ut diam quam. Vel elit scelerisque mauris pellentesque. Euismod elementum nisi quis eleifend quam adipiscing vitae. Iaculis eu non diam phasellus vestibulum."',
        clientName: '- client 3',
        image: project_3_image,
        imgAlt: 'text'
    }
];


// products
export const designProducts = [
    {
        id: 111,
        name: '2d design',
        features: ['feature 1', 'feature 2', 'feature 3'],
        price: '200'
    },
    {
        id: 112,
        name: '3d design',
        features: ['feature 1', 'feature 2', 'feature 3'],
        price: '300'
    },
    {
        id: 113,
        name: 'design and installation',
        features: ['feature 1', 'feature 2', 'feature 3'],
        price: '500'
    }
];

export const maintenanceProducts = [
    {
        id: 114,
        name: 'monthly maintenance',
        features: ['feature 1', 'feature 2', 'feature 3'],
        price: '200'
    },
    {
        id: 115,
        name: 'seasonal maintenance',
        features: ['feature 1', 'feature 2', 'feature 3'],
        price: '200'
    },
    {
        id: 116,
        name: 'garden analysis',
        features: ['feature 1', 'feature 2', 'feature 3'],
        price: '200'
    }
];

// faq 
export const faq = [
    {
        id: 'q1',
        question: 'question1',
        answer: 'answer to question'
    },
    {
        id: 'q2',
        question: 'question2',
        answer: 'answer to question'
    },
    {
        id: 'q3',
        question: 'question3',
        answer: 'answer to question'
    },
    {
        id: 'q4',
        question: 'question4',
        answer: 'answer to question'
    },
    {
        id: 'q5',
        question: 'question5',
        answer: 'answer to question'
    }
];