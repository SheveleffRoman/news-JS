import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '03cceb2ceeb74120ab97d770f9a36ade', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
