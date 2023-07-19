import './news.css';

interface NewsItem {
    author: string;
    source: { name: string };
    publishedAt: string;
    title: string;
    description: string;
    url: URL;
    urlToImage: URL;
}

class News {
    public draw(data: NewsItem[]) {
        const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        const newsDiv = document.querySelector('.news') as HTMLElement;

        news.forEach((item: NewsItem, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
            if (idx % 2) newsItem.classList.add('alt');

            const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            metaPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;

            const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            metaAuthor.textContent = item.author || item.source.name;

            const metaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            metaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const dTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            dTitle.textContent = item.title;

            const dSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            dSource.textContent = item.source.name;

            const dContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            dContent.textContent = item.description;

            const readMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            readMore.setAttribute('href', `${item.url}`);

            fragment.append(newsClone);
        });

        newsDiv.innerHTML = '';
        newsDiv.appendChild(fragment);
    }
}

export default News;
