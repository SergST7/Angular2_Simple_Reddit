import {
    NgModule,
    Component
} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


class Article{

    votes: number;
    title: string;
    link: string;

    constructor(title: string, link: string, votes?: number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void{
        this.votes++
    }

    voteDown(): void{
        this.votes--
    }

    domain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
            } catch (err) {
            return null;
            }
    }
}

// article component
@Component({
    selector: "reddit-article",
    inputs: ['article'],
    host: {
        class: 'row'
    },
    template: `
    <div class="four wide column votes center aligned">
      <div class="ui statistic">
        <div class="value">{{ article.votes }}</div>
        <div class="label">points</div>
      </div>
    </div>
    <div class="twelve wide column">
        <a class="ui large header" href="{{ article.link }}">{{ article.title }}</a>
        <div class="meta">( {{ article.domain() }} )</div>
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

    article: Article;

    // constructor(){
    //     this.article = new Article ("Angular 2", 'http://angular.io', 10);
    // }

    voteDown(): boolean{
        this.article.voteDown();
        return false
    }

    voteUp(): boolean{
        this.article.voteUp();
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
      <reddit-article  
        *ngFor="let item of sortedArticles()"
          [article]="item">
      </reddit-article>
    </div>
`
})
class RedditApp {

    articlesMy: Article[];

    constructor(){
        this.articlesMy = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1)
        ]
    }

    sortedArticles(): Article[]{
        return this.articlesMy.sort((a: Article, b: Article) => b.votes - a.votes)
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Adding title ${title.value} and link ${link.value}`);
        this.articlesMy.push(new Article(title.value, link.value));
        title.value = '';
        link.value = '';
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