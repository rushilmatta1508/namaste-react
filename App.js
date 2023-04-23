const parent  =  React.createElement(
    "div",
    {id: "parent "},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1", {},"i am an h1 tag")
    )
);

console.log(parent); //object


//const heading = React.createElement("h1", {id : "heading", xyz:"abc"},"Hello World React!" );
            
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

            
