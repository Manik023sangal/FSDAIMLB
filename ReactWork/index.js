console.log("done");
 const  parent    = document.getElementById('root');
 console.dir(parent);

 const root = ReactDOM.createRoot(parent);

//  const h1 = React.createElement("h1", {}, "Manik is a good Boyii");
//  const l1 = React.createElement("li", {}, "Manik is a good Boyii");
//  const l2 = React.createElement("li", {}, "Manik is a good Boyii");
//  const ul = React.createElement("ul", {style:{backgroundColor: 'cyan'}}, l1,l2);


//  root.render(ul);
//  root.render(h1);

const element = <h1>Hello, World!</h1>

const l1 = <li> Apple  </li>

const l2 = <li> Banana  </li>
 
const ul = <ul style={{backgroundColor: 'red'}}>{l1}{l2}</ul>

const container = (
      <div style={
            {
                  backgroundColor: 'black',
                  color: 'white'
            }
      }>
            <div>{element}</div>
            <div>{ul}</div>
      </div>
)
// root.render(ul);
root.render(container);