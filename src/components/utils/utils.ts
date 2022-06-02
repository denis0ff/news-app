interface IOptions {
  readonly [key: string]: string;
}

interface ILoaderParams {
  endpoint: string;
  options?: IOptions;
}

interface ISources {
  readonly name: string;
  readonly id: string;
}

interface IArticles {
  readonly author: string;
  readonly description: string;
  readonly publishedAt: string;
  readonly source: { readonly id: string; readonly name: string };
  readonly title: string;
  readonly url: string;
  readonly urlToImage: string;
}

interface IData {
  readonly status?: 'string';
}

interface IDataArticles extends IData {
  readonly type: 'articles';
  readonly articles?: IArticles[];
  readonly sources?: undefined;
  readonly totalResults?: number;
}

interface IDataSources extends IData {
  readonly type: 'sources';
  readonly sources?: ISources[];
  readonly articles?: undefined;
}

type Data = IDataArticles | IDataSources;

type Callback<T> = (data: T) => void;

export {
  Data, Callback, ISources, IArticles, IOptions, ILoaderParams,
};
