import React from 'react';
import axios from './axios';
import AddScrapbook from './AddScrapbook';
import MyScrapbooks from './MyScrapbooks';
import EditScrapbook from './EditScrapbook';
import Scrapbook from './Scrapbook';
import Logo from './Logo';
import {BrowserRouter, Route, Link} from 'react-router-dom'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                          <li id="logo-menu"><Logo /></li>
                          <li><Link to="/">PROFILE</Link></li>
                          <li><Link to="/addscrapbook">ADD A NEW SCRAPBOOK</Link></li>
                          <li><Link to="/myscrapbooks">MY SCRAPBOOK</Link></li>
                          <li><a href="/logout">LOG OUT</a></li>
                          {/*<li><Link to={`/editscrapbook/${scrapbook.id}`}>Chat</Link></li>*/}
                        </ul>
                    </nav>
                    <Route exact path="/addscrapbook" component={AddScrapbook} />
                    <Route exact path="/myscrapbooks" component={MyScrapbooks} />
                    <Route exact path="/editscrapbook/:id" component={EditScrapbook} />
                    <Route exact path="/scrapbook/:id" component={Scrapbook} />
                </div>
            </BrowserRouter>
        </div>
        )
    }
}
