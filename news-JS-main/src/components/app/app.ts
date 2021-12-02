import AppController from '../controller/controller';
import { AppView } from '../view/appView';

import { Data } from '../utils/utils';

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
      this.controller.getNews(e, (data: Data) => this.view.drawNews(data))
    );
    this.controller.getSources((data: Data) => this.view.drawSources(data));
  }
}

export default App;
