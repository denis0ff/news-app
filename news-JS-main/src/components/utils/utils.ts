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
  articles?: IArticles[];
  sources?: undefined;
  totalResults?: number;
}

interface IDataSources extends IData {
  type: 'sources';
  sources?: ISources[];
  articles?: undefined;
}

type Data = IDataArticles | IDataSources;

type Callback<T> = (data: T) => void;

export { Data, Callback, ISources, IArticles, IOptions };
