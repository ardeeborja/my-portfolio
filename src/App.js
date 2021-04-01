import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

// export default function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Container>
//         <Switch>
//           <Route exact path="/" component={Home} />
//         </Switch>
//       </Container>
//     </Router>
//   );
// }
