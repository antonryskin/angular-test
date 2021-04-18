import {Component} from '@angular/core'


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    interpolation: ['{{', '}}']
    
})
export class CardComponent {
    title = 'My card title'
    text = 'My paragraph'

    ngOnInit() {

    }

    changeTitle() {
        this.title = 'Title has been changed!'
    }
}