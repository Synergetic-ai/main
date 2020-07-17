import React from 'react';

import peopleA2 from '../../../../images/people/a2.jpg';
import peopleA5 from '../../../../images/people/a5.jpg';
import peopleA4 from '../../../../images/people/a4.jpg';
import peopleA1 from '../../../../images/people/a1.jpg';

const Message = ({senderPicture, senderName, messageText}) => {
    
    console.log(messageText)

    return (
        <div>
            <div className="widget-body undo_padding">
                <div className="list-group list-group-lg">
                    <button className="list-group-item text-left">
                        <span className="thumb-sm float-left mr">
                            <img className="rounded-circle" src={senderPicture} alt="..." />
                            <i className="status status-bottom bg-success" />
                        </span>
                        <div>
                            <h6 className="m-0">
                                {senderName}
                            </h6>
                            <p className="help-block text-ellipsis m-0">
                                {messageText}
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

const GetLastMessages = () => {
    return (
        [
            [peopleA4, "Jamey Brownlow", "Good news coming tonight. Seems they agreed to proceed"],
            [peopleA1, "Livia Walsh", "Check my mail plz"],
            [peopleA2, "A dude", "I went to mom's yesterday and she said you forgot your sweater over there and she'll come to give it to you on friday"],
            [peopleA5, "Jane Doe", "Wake up, Neo"],
        ]
    )
}

const ChatMessages = () => {

    const lastMessages = GetLastMessages()

    return (
        <div>
            {lastMessages.map((messageData) => {
                const [senderPicture, senderName, messageText] = messageData
                return <Message senderPicture={senderPicture} senderName={senderName} messageText={messageText}/>
            })}
            <footer className="bg-widget-transparent mt">
                <input type="search" className="form-control form-control-sm bg-custom-dark border-0" placeholder="Search" />
            </footer>
        </div>
    )
}

export default ChatMessages;