/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Components = require(`${process.cwd()}/core/Components.js`);
const Block = Components.Block;

const Background = (props) => {
  const { config: siteConfig } = props;
  const { baseUrl } = siteConfig;
  return (
    <div className="mainWrapper">

      <Block small className="stripe-bottom bg-black-grey">
        <Block.Container style={{justifyContent: "flex-start"}}>
          <Block.TextBox>
            <Block.Title>See us in action.</Block.Title>
            <Block.Paragraph>
              To illustrate the potential of Backstage, we’re showing you <a href="https://labs.spotify.com/2020/04/21/how-we-use-backstage-at-spotify/">how we use it here at Spotify</a>. The videos below feature the custom plugins and templates that we built for our internal version of Backstage. You can use Backstage to build the developer portal you want — integrating the tools that you use in your own infrastructure ecosystem. (Or get started by building an open source plugin for Backstage that everyone can use, like our <a href="https://backstage.io/blog/2020/04/06/lighthouse-plugin">Lighthouse Plugin</a>.)
            </Block.Paragraph>
          </Block.TextBox>
          <Block.Graphics>
              <Block.Graphic x={-7} y={-12} width={120} src={`${baseUrl}img/demo-illustration.svg`}/>
            </Block.Graphics>
        </Block.Container>
      </Block>

      <Block small className="stripe bg-black">
        <Block.Container style={{justifyContent: "flex-start"}}>
          <Block.TextBox>
            <Block.Title>Search all your services</Block.Title>
            <Block.Paragraph>
              All of Spotify’s services are automatically indexed in Backstage. So our engineers can stop playing detective — no more spamming Slack channels asking if anyone knows who owns a particular service and where you can find its API, only to discover that the owner went on sabbatical three months ago and you have to hunt them down on a mountain in Tibet where they’re on a 12-day silent meditation retreat. At Spotify, anyone can always find anyone else’s service, inspect its APIs, and contact its current owner — all with one search.
            </Block.Paragraph>
            <Block.LinkButton href={"https://www.youtube.com/watch?v=U1iwe3L5pzc"}>Request a live demo</Block.LinkButton>
          </Block.TextBox>
          <Block.TextBox>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/vcDL9tOv7Eo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block className="stripe-bottom bg-black-grey">
      <Block.Container style={{justifyContent: "flex-start"}}>
        <Block.TextBox>
          <Block.Title>Manage data pipelines</Block.Title>
          <Block.Paragraph>We manage a lot of data pipelines (also known as workflows) here at Spotify. So, of course, we made a great workflows plugin for our version of Backstage. All our workflow tools — including a scheduler, log inspector, data lineage graph, and configurable alerts — are integrated into one simple interface.</Block.Paragraph>
          <Block.LinkButton href={"https://www.youtube.com/watch?v=rH46MLNZIPM "}>Request a live demo</Block.LinkButton>
        </Block.TextBox>
        <Block.TextBox>
          <iframe width="800" height="500" src="https://www.youtube.com/embed/rH46MLNZIPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Block.TextBox>
      </Block.Container>
      </Block>

      <Block small className="stripe bg-black">
        <Block.Container style={{justifyContent: "flex-start"}}>
          <Block.TextBox>
            <Block.Title>Create a microservice</Block.Title>
            <Block.Paragraph>You’re a Spotify engineer about to build a new microservice (or any component) using Spring Boot. Where do you start? Search for a quick start guide online? Create an empty repo on GitHub? Copy and paste an old project? Nope. Just go to Backstage, and you’ll be up and running in two minutes — with a “Hello World” app, CI, and documentation all automatically set up and configured in a standardized way.</Block.Paragraph>

            <Block.LinkButton href={"https://www.youtube.com/watch?v=U1iwe3L5pzc"}>Request a live demo</Block.LinkButton>
          </Block.TextBox>
          <Block.TextBox>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/U1iwe3L5pzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Block.TextBox>
        </Block.Container>
      </Block>
    </div>
  );
}

module.exports = Background;
