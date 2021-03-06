import React, { Component } from 'react';
import { Route, IndexRoute, Router, hashHistory, browserHistory } from 'react-router';


import Home from './Home'
import Detail from './Detail'
import Comment from './Comment'


class App extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
    }
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}
 
// let routes = (
//     <Route path={`${prefix}/`} component={App}>
//         <IndexRoute component={HomePage}/>
//         <Route path='post' component={PostPage}/>
//         <Route path='message' component={MessagePage}/>
//         <Route path='login' component={LoginPage}/>
//         <Route path='profile' component={ProfilePage}/>
//         <Route path='user/:name' component={AccountInfo}/>
//         <Route path='topic/:id' component={TopicContent}/>
//     </Route>
// );

let routes = (
		<Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='detail/:id' component={Detail}/>
                <Route path='comment/:id' component={Comment}/>
        </Route>)
export default routes;



// let routes = (
//         <Route render={({ location }) => {
//                   console.log('location.pathname: ', location)
//                   let cls = 'normal'
//                   if (location.pathname === '/search') {
//                       cls = 'left'
//                   } else if (location.pathname.indexOf('bookList') > -1) {
//                       cls = 'left'
//                   }
//                   return(
//                       <CSSTransitionGroup
//                           transitionName={cls}
//                           transitionEnter={true}
//                           transitionLeave={true}
//                           transitionEnterTimeout={400}
//                           transitionLeaveTimeout={400}
//                       >
//                         <Route path='/' component={App}>
//                                 <IndexRoute component={Home}/>
//                                 <Route path='detail/:id' component={Detail}/>
//                                 <Route path='comment/:id' component={Comment}/>
//                         </Route>
//                         </CSSTransitionGroup>
//                   )
//               }}/>)
// export default routes;