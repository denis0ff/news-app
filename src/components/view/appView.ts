import News from './news/news';
import Sources from './sources/sources';

import { Data, IArticles, ISources } from '../utils/utils';

export class AppView {
  readonly news: News;

  readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: Data = { type: 'articles' }): void {
    const values: IArticles[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: Data = { type: 'sources' }): void {
    const values: ISources[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
