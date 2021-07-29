import { connect } from 'react-redux';

import {
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
    ProductCardContainer as SourceProductCardContainer
} from 'SourceComponent/ProductCard/ProductCard.container';

/** @namespace myFirstApp/Component/ProductCard/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state)
    // TODO extend mapStateToProps
});

/** @namespace myFirstApp/Component/ProductCard/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch)
    // TODO extend mapDispatchToProps
});

/** @namespace myFirstApp/Component/ProductCard/Container/ProductCardContainer */
export class ProductCardContainer extends SourceProductCardContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardContainer);
