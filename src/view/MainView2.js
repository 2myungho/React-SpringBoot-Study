import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { Card, Icon } from 'semantic-ui-react'

const extra = (
    <a>
        <Icon name='user' />
      16 Friends
    </a>
)

class MainView extends Component {
    render() {
        const center = {
            width: "100%",
            background:"#ffdea2"
        }
        return (
            <Grid columns={4} centered>
                <Grid.Row>
                    <Grid.Column>
                        <Card
                            style={center}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys
                            is a sound engineer living in Nashville who enjoys 
                            is a sound engineer living in Nashville who enjoys 
                            is a sound engineer living in Nashville who enjoys  
                            playing guitar and hanging with his cat.'
                            extra={extra}
                        /><br />
                        <Card
                            style={center}
                            header='Elliot Baker'
                            meta='Friend'
                            description='
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            '
                            extra={extra}
                        />
                    </Grid.Column>

                    <Grid.Column>
                        <Card
                            style={center}
                            header='Elliot Baker'
                            meta='Friend'
                            description='
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat
                            '
                            extra={extra}
                        />
                        <br />
                        <Card
                            style={center}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={extra}
                        />
                    </Grid.Column>

                    <Grid.Column>
                        <Card
                            style={center}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={extra}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default MainView;