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
        description: 'System originally developed for animal food shop for sales, storage, clients and bills management',
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

const projectdataPort = [
    {
        title: 'Website Empresa de Contabilidade',
        description: 'Website profissional, simples e responsivo desenvolvido para empresa de contabilidade',
   
        img: accouting,
        app: 'http://www.estrellacontabilidade.com.br/',
        features: [
            'Front end feito com React.js',
            'Styles com Material-ui e SCSS',
            'Mensagem para email com Nodemailer',
            'Navegação responsiva com alteração entre Drawer e Header'
          ]
    },
    {
        title: 'Sistema de Gerenciamento de Vendas',
        description: 'Sistema originalmente desenvolvido para loja de ração para gerenciamento de vendas, estoque, clientes e contas',
        img: storage,
        app: 'https://storage-cashflow-app.herokuapp.com/',
        source: 'https://github.com/joaovitor2614/Storage',
        features: [
            'API no Back-End extenso com Express and Node',
            'operações CRUD na Base de dados com Mongoose',
            'Front-End styles com SCSS e Material-ui',
            'Interação com API no Front End com Axios e Redux'
          ]
       
        
    },
    
]

export { projectdata, projectdataPort }