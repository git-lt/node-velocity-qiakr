import { Engine } from 'velocity'
var viewsPath  = process.cwd()+'/webapp/velocity/';

let c_admin = {
  customerExchange: function *(next){
    console.log(customerExchange);
    yield this.body = this.path;
    // this.body = new Engine({ template:'' }).render(data);
  },
  login: function *(next){
    yield console.log('login');
  }
}

export default c_admin;
