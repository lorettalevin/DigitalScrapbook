import React from 'react';
import axios from './axios';
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
                    {/*<nav>
                        <ul>
                          <li><Link to="/">Profile</Link></li>
                          <li><Link to="/friends">Friends</Link></li>
                          <li><Link to="/onlinefriends">Online Friends</Link></li>
                          <li><Link to="/chat">Chat</Link></li>
                          <li><a href="/logout">Log Out</a></li>
                        </ul>
                    </nav>*/}
                    <Route exact path="/addscrapbook" component={AddScrapbook} />
                    <Route exact path="/myscrapbooks" component={MyScrapbooks} />
                    <Route exact path="/editscrapbook" component={EditScrapbook} />
                    <Route exact path="/scrapbook" component={Scrapbook} />
                </div>
            </BrowserRouter>
        </div>)
    }
}
