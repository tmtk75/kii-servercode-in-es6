// @flow
import $ from "jquery";

class WebPage {
  urls: Array<string>;

  constructor(urls: Array<string>) {
    this.urls = urls;
  }

  fetch(): Promise {
    return Promise.all(this.urls.map(e => $.get(e)))
  }

  static URLs(urls: Array<string>): WebPage {
    return new WebPage(urls);
  }
}

export default WebPage;
