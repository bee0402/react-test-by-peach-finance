import React from "react";
import { Segment, Image, Divider } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";

const Detail = ({shoppingListsItem}) => (
  <Segment>
    <Segment clearing>
      <Header as="h2" floated="right">
        <Button icon>
          <Icon name="cart arrow down" />
        </Button>
      </Header>
      <Header as="h2" floated="left">
        {shoppingListsItem}
      </Header>
    </Segment>

    <Divider fitted />
    <Image
      src={process.env.PUBLIC_URL + "/img/thumb.png"}
      size="large"
      centered
    />
    <Divider fitted />
    <Header as="h3">Specification</Header>

    <Segment.Group horizontal>
      <Segment>Dimentions:</Segment>
      <Segment>Weight:</Segment>
      <Segment>Capacity:</Segment>
    </Segment.Group>
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
      facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
      referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
      electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>
    <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
      definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
      phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
      phaedrum, vim vivendum maiestatis in.
    </p>
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
      facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
      porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
      everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
      per, quas minimum postulant per id.
    </p>
  </Segment>
);

export default Detail;
