import { Component } from '@angular/core';

import {ModulesComponent} from './modules/modules.component';

@Component({

    selector: 'my-app',
    templateUrl : 'app/app.component.html',
    directives : [ModulesComponent]
})
export class AppComponent { 
    title = 'Customer Support App Version 2.0';
}
