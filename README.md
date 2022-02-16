# An Easy Way to Maintain Both GitHub Repo and Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/ohbriansung/page/blob/master/LICENSE)

## Abstraction

Some people prefer to go to GitHub and interact with the source code.
Some people prefer to see the portfolio website and read the documentations.
Therefore, I wanted to provide the access to both and I wanted to have a more efficient way to manage the contents for both.

## Introduction

This website was built with *React.js* [0] and hosted with *GitHub Pages* [1].
The backend of this website is actually GitHub.
This repository only contains ReactJS code, JSON definitions and images.
The contents \(projects and blogs\) on this website are not hard coded in the source code or any file in this repository.
For more details, please continue reading in this article.

## Contents and Definitions

All the contents on this website include projects and blogs were written into README markdown files in the GitHub repositories and Gists. I created a [contents.json](https://github.com/ohbriansung/page/blob/master/src/json/contents.json) file to define the source and metadata for each post.

For example, the JSON definition and the schema of the `Ducky Raspberry Pi Zero for Mac` post.

```JSON
{
    "projects": [
        {
            "id": 201904142014,
            "name": "Ducky Raspberry Pi Zero for Mac",
            "img": "https://raw.githubusercontent.com/ohbriansung/usb_rubber_ducky/master/pi_zero_ducky/img/concept.jpg",
            "date": "Apr 16, 2019, 08:14 PM PDT",
            "tag": "Cybersecurity, Raspberry Pi, Bash",
            "url": "https://raw.githubusercontent.com/ohbriansung/usb_rubber_ducky/master/pi_zero_ducky/README.md",
            "repo": "https://github.com/ohbriansung/usb_rubber_ducky/tree/master/pi_zero_ducky"
        }
    ]
}
```

* *"projects"* - A dictionary or map object defined in "porjects" list is a post under Projects page. Same logic for Blogs page, there is a "blogs" list
* *"id" & "date"* - They are simply the timestamp of the post and "date" is a human readable version
* *"name"* - The title of the post. Searchable on the website
* *"img"* - The link to the image for the post
* *"tag"* - The keywords that can be used to search on the website
* *"url"* - The link to the README markdown file of a GitHub repository or a Gist
* *"repo"* - The link to the GitHub repository of the post

## Markdown to HTML

In each post component, I used *Axios* [2] library to fetch the markdown raw text into `state.response` using the *"url"* defined above.

```JavaScript
componentDidMount() {
    axios.get(this.props.item.url).then(res => {
        this.setState({ response: res.data });
    });
}
```

After getting the markdown content, I used *Marked* [3] library to convert the markdown text into HTML and then set the result into a `<div>`. The result would be what you saw on my website.

```JavaScript
render() {
    const markdown = marked(this.state.response);
    return (...);
}
```

## Build and Deploy

* Build packages
```shell
npm run build
```

* Deploy locally for testing
```shell
npm start
```

* Deploy to github.io -> [ohbriansung.github.io](https://ohbriansung.github.io)
```shell
npm run deploy
```

## Conclusion

With this approach, I can easily manage both of my GitHub repositories and my personal website's posts by writing 1 copy of README markdown file in the repository and adding the JSON definition to this GitHub Page repository. There for, the people visiting will see the same content from my GitHub and my personal website.

## Author

Chien-Yu (Brian) Sung

## References

0. [ReactJS](https://reactjs.org/)
1. [GitHub Pages](https://pages.github.com/)
2. [Axios](https://axios-http.com/docs/intro)
3. [Marked](https://marked.js.org/)
