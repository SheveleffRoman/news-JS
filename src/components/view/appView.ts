import News, { NewsItem } from './news/news';
import Sources, { SourceItem } from './sources/sources';

export interface Data {
    articles: NewsItem<string>[];
    sources: SourceItem<string>[];
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: Partial<Data>) {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    public drawSources(data: Partial<Data>) {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
