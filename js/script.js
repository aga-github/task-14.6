var items = [{
        id: 1,
        name: 'Licznik A',
        inc: 1
    },
    {
        id: 2,
        name: 'Licznik B',
        inc: 10
    },
    {
        id: 3,
        name: 'Licznik C',
        inc: 100
    }
];

var element = React.createElement(ManyCounters, { countersArray: items });
ReactDOM.render(element, document.getElementById('app'));