import {Redirect, Route} from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {Provider} from "react-redux";
import {store} from "./context/redux/store";
import PostsPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";

const App: React.FC = () => (
    <Provider store={store}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/posts" component={PostsPage} />
            <Route exact path="/">
              <Redirect to="/posts" />
            </Route>
            <Route path="/posts/:id" component={PostDetailPage} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Provider>
);

export default App;
