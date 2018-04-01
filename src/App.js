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
                          <li><Link to="/">Profile</Link></li>
                          <li><Link to="/addscrapbook">Add a new Scrapbook</Link></li>
                          <li><Logo /></li>
                          <li><Link to="/myscrapbooks">My Scrapbooks</Link></li>
                          <li><Link to={`/editscrapbook/${scrapbook.id}`}>Chat</Link></li>
                          <li><a href="/logout">Log Out</a></li>
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
