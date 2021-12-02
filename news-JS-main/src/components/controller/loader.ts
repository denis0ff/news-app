interface IOptions {
  [key: string]: string;
}

export interface ISources {
  name: string;
  id: string;
}

export interface IArticles {
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

export type Data = IDataArticles | IDataSources;

export type Callback = (data?: Data) => void;

class Loader {
  baseLink: string;
  options: IOptions;
  constructor(baseLink: string, options: IOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: IOptions | {} },
    callback: Callback = (data) => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: IOptions | {}, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: Callback, options: IOptions | {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: Data) => callback(data))
      .catch((err: PromiseRejectedResult) => console.error(err));
  }
}

export default Loader;
