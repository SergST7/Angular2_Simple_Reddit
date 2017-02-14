
import {
    NgModule,
    Component
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


@Component({
    selector: "hello-world",
    template: `<div>
      <h1>Helo {{ name }}</h1>
      </div>`
})

class HelloWorld{
    name: string;

    constructor(){
        this.name = "Felix"
    }

}

@NgModule({
    declarations: [HelloWorld],
    imports: [BrowserModule],
    bootstrap: [HelloWorld]
})
class HelloWorldAppModule{}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);