import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modules',
    templateUrl: 'modules.component.html'
})
export class ModulesComponent implements OnInit {
    constructor() { }
    modules = [{id: 1, name :'Trade Ammend'},{id: 2, name :'User Deactivation'},{id: 3, name :'Delete Investor'}];
    ngOnInit() { }
}