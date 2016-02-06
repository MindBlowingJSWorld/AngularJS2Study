import {Component} from 'angular2/core';
import {Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';


@Component({
    selector: 'my-app',
    directives: [HeroDetailComponent],
    providers: [HeroService],
    template: `
        <h2>My Heroes</h2>
        <ul class="heroes">
           <!-- <li *ngFor="#hero from heroes">
                &lt;!&ndash; each hero goes here &ndash;&gt;
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>-->

            <li *ngFor="#hero of heroes"
                (click)="onSelect(hero)"
                [class.selected]="hero === selectedHero" >

                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>

        </ul>

        <hr>

        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        `,
    styles:[`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 10em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0em;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #EEE;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0em 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0px 0px 4px;
        }
    `]
})

export class AppComponent implements OnInit{


    ngOnInit() {
        this.getHeroes();
    }

    constructor(private _heroService: HeroService) { }

    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        //this.heroes = this._heroService.getHeroes();
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

}