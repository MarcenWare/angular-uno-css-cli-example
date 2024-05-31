import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent {
    list = ['bg-red', 'bg-green', 'bg-blue', 'bg-yellow']
}
