import AppController from '../controller/controller';
import { AppView, Data } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = document.querySelector('.sources') as HTMLElement;
        sources?.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data?: Data) => {
                if (data) {
                    this.view.drawNews(data);
                }
            })
        );
        this.controller.getSources((data?: Data) => {
            if (data) {
                this.view.drawSources(data);
            }
        });
    }
}

export default App;
