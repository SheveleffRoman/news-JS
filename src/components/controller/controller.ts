import AppLoader from './appLoader';
import { Data } from '../view/appView';

class AppController extends AppLoader {
    public getSources(callback: (data?: Data) => void ) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data?: Data) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;
    
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                } else {
                    console.log('data-source-id attribute is missing');
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
    
}

export default AppController;
