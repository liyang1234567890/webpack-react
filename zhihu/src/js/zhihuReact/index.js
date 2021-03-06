import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import Detail from './Detail'
import Comment from './Comment'



let rootElement = document.getElementById('app')

render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/comment/:id" component={Comment} />
        </div>
    </Router>,
    rootElement
)