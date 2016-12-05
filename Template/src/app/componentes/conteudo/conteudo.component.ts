import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
    selector: 'conteudo',
    templateUrl: './conteudo.component.html'
})
export class ConteudoComponent implements OnInit {
    springUrl = 'http://localhost:8080/';
    conteudo;

    constructor(private _http:Http) { }

    ngOnInit() {
        this.conteudo = this._http.get(this.springUrl).map(res => res.json().data as string[]);
     }
}