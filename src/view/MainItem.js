import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function MainItem({ book, onWriteRemove}) {
    const {id, title, content} = book;
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                <Card>
                    <Card.Content header={title} />
                    <Card.Content description={content} />
                    <Card.Content extra>
                        <Icon name='user' />4 Friends
                        </Card.Content>
                </Card>
                }
            >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
                    <Modal.Description>
                        <Header>{title}</Header>
                        <p>
                        {content}
                        </p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Nope
                    </Button>
                    <Button
                        content="Yep, that's me"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        positive
                    />
                    <Button
                        content="Remove"
                        color='red'
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => onWriteRemove(id)}
                    />
                </Modal.Actions>
            </Modal>

        </div>
    );

}

export default MainItem;