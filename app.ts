import {
    NgModule,
    Component
} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


// article component
@Component({
    selector: "reddit-article",
    host: {
        class: 'row'
    },
    template: `
    <div class="four wide column votes center aligned">
      <div class="ui statistic">
        <div class="value">{{ votes }}</div>
        <div class="label">points</div>
      </div>
    </div>
    <div class="twelve wide column">
        <a class="ui large header" href="{{ link }}">{{ title }}</a>
          <ul class="ui big horizontal list voters">
            <li class="item">
              <a href (click)="voteUp()">
                <i class="chevron up icon"></i>upvote
              </a>
            </li>
            <li class="item">
              <a href (click)="voteDown()">
                <i class="chevron down icon"></i>downvote
              </a>
            </li>
          </ul>
    </div>
`
})
class ArticleComponent{
    votes: number;
    title: string;
    link: string;

    constructor(){
        this.votes = 10;
        this.title = "Angular 2";
        this.link =  'http://angular.io';
    }

    voteDown(){
        this.votes--;
        return false
    }

    voteUp(){
        this.votes++;
        return false
    }

};

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
    </form>
    <div class="ui grid posts">
      <reddit-article></reddit-article>
    </div>
`
})
class RedditApp {
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Adding title ${title.value} and link ${link.value}`);
        return false
    }
}


@NgModule({
    declarations: [
        RedditApp,
        ArticleComponent
    ],
    imports: [BrowserModule],
    bootstrap: [RedditApp]
})
class RedditAppModule {
}

platformBrowserDynamic().bootstrapModule(RedditAppModule);