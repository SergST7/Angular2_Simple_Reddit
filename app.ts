
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
        <input type="text" name="title" #newTitle>
      </div>
      <div  class="field">
        <label for="link">Link: </label>
        <input type="text" name="link" #newLink>
      </div>
      
      <button class="ui button positive right floated"
        (click)="addArticle(newTitle, newLink)">
        Submit add link
      </button>
    </form>`
})

class RedditApp{
    addArticle(title: HTMLInputElement, link:HTMLInputElement): boolean{
        console.log(`Adding title ${title.value} and link ${link.value}`);
        return false
    }
}


@NgModule({
    declarations: [RedditApp],
    imports: [BrowserModule],
    bootstrap: [RedditApp]
})
class RedditAppModule{}

platformBrowserDynamic().bootstrapModule(RedditAppModule);