import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '7f12bc8d8e3745aa8c82f86598e5c437', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
