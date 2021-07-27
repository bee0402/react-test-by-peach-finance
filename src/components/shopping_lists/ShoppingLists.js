import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Segment } from "semantic-ui-react";
import { Grid, Menu } from "semantic-ui-react";
import { Item } from "semantic-ui-react";
import Detail from "./Detail";
import SearchStandard from "./SearchStandard";
import { connect } from "react-redux";
import { getLists, deleteList } from "../../actions/shoppingListActions";
import PreLoader from "../common/PreLoader";
import Pagination from "react-js-pagination";

export class ShoppingLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      limit: 10,
      activeItem: "Widget 1",
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const { getLists } = this.props;
    const { activePage, limit } = this.state;

    getLists(activePage, limit);
  }

  handleDelete(id) {
    const { getLists, deleteList } = this.props;
    const { activePage, limit } = this.state;

    deleteList(id, () => {
      getLists(activePage, limit);
    });
  }

  handlePageChange(pageNumber) {
    const { getLists } = this.props;
    const { limit } = this.state;

    this.setState({ activePage: pageNumber });
    getLists(pageNumber, limit);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { shoppingLists, loading } = this.props;
    const { activePage, limit } = this.state;

    if (!shoppingLists || loading) {
      return <PreLoader />;
    }

    const { activeItem } = this.state;
    const { shopping_lists } = shoppingLists;

    let lists,
      pagination = "";
    if (_.isEmpty(shoppingLists)) {
      lists = <p>You currently have no shopping lists</p>;
      pagination = "";
    } else {
      lists = (
        <Menu fluid vertical tabular>
          {_.map(shopping_lists, (shoppingList) => (
            <Menu.Item
              name={shoppingList.name}
              active={activeItem === shoppingList.name}
              onClick={this.handleItemClick}
            >
              <Segment clearing>
                <Item key={shoppingList.key}>
                  <Item.Content>
                    <h2>{shoppingList.name}</h2>
                    <Item.Meta>Price: {shoppingList.price}</Item.Meta>
                  </Item.Content>
                </Item>
              </Segment>
            </Menu.Item>
          ))}
        </Menu>
      );
      pagination = (
        <div className="ui inverted center aligned grid">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={limit}
            totalItemsCount={shoppingLists.total}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
            innerClass="ui pagination menu"
            itemClass="item"
            disabledClass="disabledClass"
          />
        </div>
      );
    }

    return (
      <div className="content">
        <Container>
          <Segment basic>
            <SearchStandard />
          </Segment>

          <Segment basic>
            <Grid doubling columns={5}>
              <Grid.Column width={4}>
                {lists}
                {pagination}
              </Grid.Column>

              <Grid.Column stretched width={12}>
                <Detail shoppingListsItem={activeItem} />
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

// Define prop types
ShoppingLists.propTypes = {
  shoppingLists: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getLists: PropTypes.func,
  deleteList: PropTypes.func,
};

// Map store state to component props
export function mapStateToProps(state) {
  const { shoppingLists } = state;

  return {
    shoppingLists: shoppingLists.shoppingLists,
    loading: shoppingLists.loading,
  };
}

export default connect(mapStateToProps, { getLists, deleteList })(
  ShoppingLists
);
