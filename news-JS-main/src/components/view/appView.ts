import News from './news/news';
import Sources from './sources/sources';

import { Data, IArticles, ISources } from '../utils/utils';

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: Data = { type: 'articles' }) {
    const values: IArticles[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: Data = { type: 'sources' }) {
    const values: ISources[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
