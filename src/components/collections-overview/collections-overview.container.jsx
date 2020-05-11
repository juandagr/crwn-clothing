import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spiner/with-spiner.component";
import CollectionsOverview from "../collections-overview/collections-overview.component";

/**
 * container pattern, using HOC
 */
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
