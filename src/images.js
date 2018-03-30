import React from 'react';
import axios from './axios';

export default class Images extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <form>
                        <input onChange={this.handleChange} name="url" type="file"/>
                        <input onChange={this.handleChange} name="image_title" type="text" placeholder="Image Title"/>
                        <input onChange={this.handleChange} name="description" type="text" placeholder="Image Caption"/>
                        <button onClick={this.handleSubmit}>SUBMIT</button>
                    </form>
                </div>
        </div>
    )}
}