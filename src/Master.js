import React, { Component } from 'react';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
// import Scrolltotop from './helper/Scrolltotop';
import  Layout  from './Layout';
import Valuation from './component/valution/index';
import Sellmycar from './component/Sell My Car/index';
import Sellmake from './component/Sell Any Make/index';
import Mortagaged from './component/Mortgaged/index';
import Faq from './component/Faqs/index';
import Contactus from './component/Contact Us/index';
import Aboutus from './component/About us/index';

// import Main from './Main';

export default class Master extends Component {

    render(){
        return(
            <div>
 <Router>
 <Layout>
  <Switch>
  {/* <Route  exact={true} path="/" component={Main}/> */}
    <Route  exact={true} path="/valution" component={Valuation}/>
    <Route  exact={true} path="/sellmycar" component={Sellmycar}/>
    <Route  exact={true} path="/sellanymake" component={Sellmake}/>
    <Route  exact={true} path="/mortagaged" component={Mortagaged}/>
    <Route  exact={true} path="/faqs" component={Faq}/>
    <Route  exact={true} path="/aboutus" component={Aboutus}/>
    <Route  exact={true} path="/contactus" component={Contactus}/>
 
  </Switch>
  </Layout>
      </Router>
{/* <Valuation/> */}
            </div>
        )
    }
}