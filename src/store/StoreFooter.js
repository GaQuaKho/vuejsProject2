import {createStore} from 'vuex'
const FooterStore = {
    namespaced:true,
    state:{
        company: ['About Us',
            'We Are Hiring',
            'Meet the team',
            'Copyright',
            'Terms of use',
            'Privacy Policy',
            'Contact Us'
        ],
        developer:[
            'Web Development',
            'SEO',
            'Theme Development',
            'Digital Marketing',
            'Email Marketing',
            'Plugin Development',
            'Article Writting'
        ],
        ourPartner:[
            'Faq',
            'Blog',
            'Forum',
            'Documentation',
            'Refund Policy',
            'Ticket System',
            'Biling System'
        ],
        infor:{
            describe: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.',
            email: 'info@corlate.com',
            fax: '222 999 333',
            phone: '01700 77 88 99'
        }
    }
}
export default FooterStore;