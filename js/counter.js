var Counter = React.createClass({
    propTypes: {
        obj: React.PropTypes.object.isRequired,
    },

    componentDidMount() {
        console.log('This method is a good place to set up any subscriptions');
    },

    componentWillUnmount() {
        console.log('If you set up subscription, dont forget to unsubscribe in componentWillUnmount().');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + this.props.obj.inc
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - this.props.obj.inc
        });
    },

    render: function() {
        return React.createElement('li', {},
            React.createElement('span', {}, this.props.obj.name + 
            '.  Dodaje i odejmuje po: ' + this.props.obj.inc + '.  Aktualny stan:  ' + this.state.counter),
            React.createElement('br'),
            React.createElement('button', { onClick: this.decrement, type: 'button' }, 'Odejmij'),
            React.createElement('button', { onClick: this.increment, type: 'button' }, 'Dodaj')
        );
    }
});