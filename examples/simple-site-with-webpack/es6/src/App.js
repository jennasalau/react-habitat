import ReactHabitat   from 'react-habitat';

// Our top level react components
import Banner       from './components/Banner';
import Featurette   from './components/Featurette';

class Main extends ReactHabitat.Bootstrapper {

  constructor(){

    super();

    // Create a new container
    var container = new ReactHabitat.Container();

    // Register our components that we want to expose to the DOM
    container.register('RBanner', Banner);
    container.register('RFeaturette', Featurette);

    // Set the DOM container
    this.setContainer(container);

  }
}


export var main = new Main();
