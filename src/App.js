import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// const Home = () =>
//   <div>
//     <h2>Welcome Home</h2>
//   </div>
// // about goes below
// const About = () =>
//   <div>
//     <h2>About</h2>
//   </div>
// particular match
const child = ({ match }) => {
  return (
    <div>
      <h3>
        Requested Param:{match.params.id}
      </h3>
    </div>
  )
}

const ComponentWithRegex = ({ match }) => {
  return (
    <div>
      <h3>
        Only asc/desc are allowed : {match.params.direction}
      </h3>
    </div>
  )
}

//  topics goes below
// const Topics = ({ match }) =>
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/components`}>components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. state </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:id`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>

const App = () => {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="zillow-groups">zillow Group</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Route path="/:id" component={child} />

        <Route
          path="/order/:direction(asc|desc)"
          component={ComponentWithRegex}
        />

        {/* <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
  )
}

// const Header = () =>
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/about">About</Link>
//     </li>
//     <li>
//       <Link to="/topics">Topics</Link>
//     </li>
//   </ul>

export default App
