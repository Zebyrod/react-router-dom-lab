// src/components/MailboxList/MailboxList.jsx

import { Link } from 'react-router';

const MailboxList = (props) => {
    console.log(props);

    return (
        <>
            <h1>Mailboxes</h1>
            <div>
                {!props.mailboxes.length ? (
                    <h2>There are currently no mailboxes at this post office.</h2>
                ) : (
                    <ul>
                        {props.mailboxes.map((mailbox) => (
                            <li class='mail-box'>
                                <Link to={`/mailboxes/${mailbox._id}`}>
                                    <div className='mail-box'>
                                        <h2>{mailbox._id}</h2>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );

};

export default MailboxList;