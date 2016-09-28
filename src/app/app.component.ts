import { Component } from '@angular/core';

import {ModulesComponent} from './modules/modules.component';

@Component({

    selector: 'my-app',
    template : `<h1>{{title}}</h1>
    <nav>
        Hello Finomial...       
</nav>`
})
export class AppComponent { 
    title = 'Customer Support App Version 2.0';
}
