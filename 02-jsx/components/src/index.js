import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
             <CommentDetail author="Pippo" timeAgo="Today at 6:00PM" text="First comment" avatar={faker.image.avatar()} />
             <CommentDetail author="Pluto" timeAgo="Today at 4:00AM" text="Second comment" avatar={faker.image.avatar()} />
             <ApprovalCard>
                <CommentDetail author="Paperino" timeAgo="yesterday at 5:00PM" text="Third comment" avatar={faker.image.avatar()} />
             </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));