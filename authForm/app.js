import * as domManager from "./services/domManager.js"
import * as localStorageManager from "./services/localStorageManager.js"
import UserContext from "./contexts/UserContext.js";

const onPageLoad = () => {
    const isAuthenticated = localStorageManager.isLoggedIn();

    if(isAuthenticated) {
        UserContext.user = localStorageManager.getUser();
        domManager.appendUserDetailsView(UserContext.user);
    } else {
        domManager.appendLoginView();
    }

    domManager.appendNavigation(UserContext.user);
}

onPageLoad()