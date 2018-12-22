import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    recipeShow = true;

    onNavigation(event) {
        if (event === 'recipe') {
            this.recipeShow = true;
        } else {
            this.recipeShow = false;
        }
    }
}
