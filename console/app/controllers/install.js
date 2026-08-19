import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class InstallController extends Controller {
    @service installation;

    runningLocallyDocsUrl = 'https://ubden.com';
    cloudDocsUrl = 'https://ubden.com';

    get isRefreshing() {
        return this.installation.isRefreshing;
    }
}
