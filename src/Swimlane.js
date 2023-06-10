import React from 'react';
import Card from './Card';
import './Swimlane.css';
import dragula from 'dragula';

export default class Swimlane extends React.Component {
  constructor(props) {
    super(props);
    this.dragulaContainer = React.createRef();
    
  }
  
  
  
  render() {
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    })
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div className="Swimlane-dragColumn" ref={this.dragulaContainer} data-swimlane-id={this.props.swimlaneId}>
          {cards}
        </div>
      </div>);
  }
  
}
