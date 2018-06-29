import React, { Component } from 'react';

class NotfoundPage extends Component {
    render() {
        return (

            <div className="alert alert-warning text-center">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>404 Notfound!</strong>
            </div>

        )
    }
}

export default NotfoundPage;