import { accouting, storage } from "../imgs/imgs";


const projectdata = [
    {
        title: 'Accounting Firm Webiste',
        description: 'Simple Responsive Website developed for accounting firm with React.js stack',
        img: accouting,
        app: 'http://www.estrellacontabilidade.com.br/',
        features: [
            'Front end built with React.js',
            'Styles with Material-ui and SCSS',
            'Email message with Nodemailer',
            'Responsive navbar with Drawer and Header alternation'
          ]
    },
    {
        title: 'Business management system',
        description: 'System developed for sales, storage, clients, bills management',
        img: storage,
        app: 'https://storage-cashflow-app.herokuapp.com/',
        source: 'https://github.com/joaovitor2614/Storage',
        features: [
            'Extensive backend API with Express and Node',
            'CRUD operations on Database with Mongoose',
            'Front styles with SCSS and Material-ui',
            'Front end API interaction with Axios and Redux'
          ]
       
        
    },
    
]

export default projectdata