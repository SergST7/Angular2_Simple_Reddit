
import {
    NgModule,
    Component
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


@Component({
    selector: "reddit",
    template: `
    <form class="ui large form segment">
      <h1 class="ui header">Add a Link</h1>
      <div  class="field">
        <label for="title">Title: </label>
        <input type="text" name="title">
      </div>
      <div  class="field">
        <label for="link">Link: </label>
        <input type="text" name="link">
      </div>
    </form>`
})

class RedditApp{}


@NgModule({
    declarations: [RedditApp],
    imports: [BrowserModule],
    bootstrap: [RedditApp]
})
class RedditAppModule{}

platformBrowserDynamic().bootstrapModule(RedditAppModule);