import React from 'react';
import {Form} from 'react-router-dom';

interface contactType {
    first: string;
    last: string;
    avatar: string;
    twitter: string;
    notes: string;
    favorite: boolean;
}

export default function Contact() {
    const contact: contactType = {
        first: 'Your',
        last: 'Name',
        avatar: 'https://placekitten.com/g/200/200',
        twitter: 'your_handle',
        notes: 'Some notes',
        favorite: true,
    };

    return (
        <div id="contact">
            <div>
                <img
                    alt={contact.avatar}
                    key={contact.avatar}
                    src={contact.avatar}
                />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{' '}
                    <Favorite contact={contact} />
                </h1>

                {contact.twitter && (
                    <p>
                        <a
                            target="_blank"
                            href={`https://twitter.com/${contact.twitter}`}
                            rel="noreferrer"
                        >
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p>{contact.notes}</p>}

                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {
                            if (
                                // eslint-disable-next-line no-restricted-globals
                                !confirm(
                                    'Please confirm you want to delete this record.',
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

function Favorite({contact}: any) {
    // yes, this is a `let` for later
    const favorite: boolean = contact.favorite;
    return (
        <Form method="post">
            <button
                name="favorite"
                value={favorite ? 'false' : 'true'}
                aria-label={
                    favorite ? 'Remove from favorites' : 'Add to favorites'
                }
            >
                {favorite ? '★' : '☆'}
            </button>
        </Form>
    );
}
