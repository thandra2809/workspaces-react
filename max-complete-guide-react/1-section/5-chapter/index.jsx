function Person(props){
    return (
        <div className="person">
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        </div>
);
}

var app=(
    <div>
    <Person name="Srini" age="38"/>
    <Person name="Priya" age="33"/>
    <Person name="Shreyus" age="3"/>
    </div>
);

ReactDOM.render(app,document.querySelector("#app"));
