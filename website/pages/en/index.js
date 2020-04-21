/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const Components = require(`${process.cwd()}/core/Components.js`);
const Block = Components.Block;
const ActionBlock = Components.ActionBlock;
const Breakpoint = Components.Breakpoint;

class Index extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    const { baseUrl } = siteConfig;

    return (
      <main className="MainContent">
        <Block small className="stripe-bottom bg-black-grey">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>Happy developers make happy code.</Block.Title>
              <Block.Paragraph>Meet the first open-source developer portal that puts the developer experience first. With a unified frontend for all your infrastructure tooling, Backstage gets developers up and running faster, which makes them happier. And a happier developer is a more productive developer.</Block.Paragraph>
              <Block.LinkButton href={"https://github.com/spotify/backstage"}>Go to GitHub</Block.LinkButton>
            </Block.TextBox>
            <Block.Graphics>
              <Block.Graphic x={-12.5} y={16} width={120} src={`${baseUrl}img/laptop.svg`}/>
              <Block.Graphic x={5.8} y={20} width={88} src={`${baseUrl}img/screen.gif`}/>
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block className="stripe bg-dots">
          <Block.Container reversed>
            <Block.TextBox>
              <Block.Title>Less wrangling, more building.</Block.Title>
              <Block.Paragraph>The philosophy behind Backstage is simple: Don't expose your engineers to the full complexity of your infrastructure tooling. Engineers should be shipping code — not figuring out a whole new toolset every time they want to implement the basics.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics style={{margin: '0 100px'}}>
              <Breakpoint
                wide={<Block.Graphic x={-30} y={5} width={158} src={`${baseUrl}img/logos-background.svg`}/>}
                narrow={<div className='logos-mobile-background'/>}
              />
              <Block.Graphic x={20} y={10} width={60} src={`${baseUrl}img/logos.svg`}/>
              <Breakpoint narrow={<Block.Graphic x={0} y={85} width={100} src={`${baseUrl}img/logos-signature.svg`}/>}/>
            </Block.Graphics>
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            See for yourself
          </ActionBlock.Title>
          <ActionBlock.Link href={`${baseUrl}demos`}>
            Demos
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe bg-black">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>As simple as writing a plugin.</Block.Title>
              <Block.Paragraph>Backstage makes unifying all of your infrastructure tooling, services, and documentation as simple as writing a plugin. With all your developer tools
in one place, your engineers will always know where to find the right tool for the job. And they’ll already know how to use it, too — because now all your tools use the same, easy-to-use UI.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Breakpoint
                wide={<Block.Graphic x={-5} y={-5} width={132} src={`${baseUrl}img/plugin.svg`}/>}
                narrow={<Block.Graphic x={-23.5} y={-5} width={132} src={`${baseUrl}img/plugin-mobile.svg`}/>}
              />
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block className="stripe bg-grey-black">
          <Block.Container reversed>
            <Block.TextBox>
              <Block.Title>Developers are people, too.</Block.Title>
              <Block.Paragraph>Why shouldn’t developer tools provide a first-class user experience? After all, engineers are people, too. Backstage is elegantly designed to make a diverse ecosystem of plugins, components, and frameworks easier to access and easier to use. How? By doing what other developer portals forget to consider: the developer on the other end of the portal.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Block.Graphic x={-5} y={-5} width={120} src={`${baseUrl}img/developers.svg`}/>
            </Block.Graphics>
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            Read why we built it
          </ActionBlock.Title>
          <ActionBlock.Link href={`${baseUrl}background`}>
            Our Story
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe bg-black">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>An open platform inside and out.</Block.Title>
              <Block.Paragraph>As a fully extensible platform, Backstage enables infrastructure teams to integrate new ideas from wherever they come from — whether that’s the open source community at large or the people who understand your infrastructure pain points the best: your own engineers. This extensibility is one reason why Backstage wasn’t just adopted, but embraced by Spotify’s own engineers.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Block.Graphic x={-20} y={-10} width={140} src={`${baseUrl}img/open-platform.svg`}/>
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block className="stripe bg-grey-black">
          <Block.Container reversed>
            <Block.TextBox>
              <Block.Title>Compliance, privacy, and security, oh my!</Block.Title>
              <Block.Paragraph>Managing compliance across five services is one thing. Managing 5,000 is quite another. Backstage makes it possible to scale and makes all the hairy bits less hairy. Plus, happier lawyers, accountants, and security officers also make for happier developers.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Breakpoint
                wide={<Block.Graphic x={-33} y={-15} width={150} src={`${baseUrl}img/compliance.svg`}/>}
                narrow={<Block.Graphic x={-25} y={-40} width={150} src={`${baseUrl}img/compliance.svg`}/>}
              />
            </Block.Graphics>
          </Block.Container>
        </Block>

        <ActionBlock className="stripe-top bg-teal">
          <ActionBlock.Title>
            Request a live demo
          </ActionBlock.Title>
          <ActionBlock.Link href='https://docs.google.com/forms/d/e/1FAIpQLSel10NmA_UXN3uO0cGHRfanLYz94p8LCu70GG7vK2LFb2AOkQ/viewform'>
            Get in Touch
          </ActionBlock.Link>
        </ActionBlock>
      </main>
    );
  }
}

module.exports = Index;
