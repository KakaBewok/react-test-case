export class Blog {
    source: object = {};
    author: string = '';
    title: string = '';
    description: string = '';
    url: string = '';
    urlToImage: string = '';
    publishedAt: Date = new Date();
    content: string = '';

  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.source) this.source = initializer.source;
      if (initializer.source.id) this.source = initializer.source;
      if (initializer.source.name) this.source = initializer.source;
      if (initializer.author) this.author = initializer.author;
      if (initializer.title) this.title = initializer.title;
      if (initializer.description) this.description = initializer.description;
      if (initializer.url) this.url = initializer.url;
      if (initializer.urlToImage)
        this.urlToImage = initializer.urlToImage;
      if (initializer.publishedAt)
        this.publishedAt = new Date(initializer.publishedAt);
      if (initializer.content) this.content = initializer.content;
    }
  }
