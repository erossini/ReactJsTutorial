import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '206858217254-e2eekjluet8585f2hgq8mqjddmk62nf0.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
        <div>
            Google Auth
        </div>
            );
    }
}

export default GoogleAuth;