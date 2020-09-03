import React from 'react';
import { Card } from 'react-bootstrap'
const testURL = "#/test"
export default class CardChart extends React.Component {
    render() {
        const { title, subTitle, link } = this.props
        return (
            <Card style={{ width: '28rem', height: '12rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
                        {(link === testURL) && <Card.Link href={link} className="text-danger">{`--> Xem báo cáo`}</Card.Link>}
                        {(link !== testURL) && <Card.Link href={link} >{`--> Xem báo cáo`}</Card.Link>}
                </Card.Body>
            </Card>
        )
    }
}
