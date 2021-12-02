interface IOptions {
  [key: string]: string;
}

interface ISources {
  name: string;
  id: string;
}

interface IArticles {
  author: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

interface IData {
  status?: 'string';
}

interface IDataArticles extends IData {
  type: 'articles';
  articles?: Array<IArticles>;
  sources?: undefined;
  totalResults?: number;
}

interface IDataSources extends IData {
  type: 'sources';
  sources?: Array<ISources>;
  articles?: undefined;
}

type Data = IDataArticles | IDataSources;

type Callback = (data?: Data) => void;

export { Data, Callback, ISources, IArticles, IOptions };
