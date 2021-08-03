/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { showNotification } from 'Store/Notification/Notification.action';

import StoreSwitcher from './StoreSwitcher.component';

/** @namespace Component/StoreSwitcher/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    currentStoreCode: state.ConfigReducer.code,
    storeList: state.ConfigReducer.storeList
});

/** @namespace Component/StoreSwitcher/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    showErrorNotification: (message) => dispatch(showNotification('error', message))
});

/** @namespace Component/StoreSwitcher/Container */
export class StoreSwitcherContainer extends PureComponent {
    static propTypes = {
        showErrorNotification: PropTypes.func.isRequired,
        currentStoreCode: PropTypes.string,
        storeList: PropTypes.arrayOf(PropTypes.shape({
            code: PropTypes.string,
            name: PropTypes.string
        })).isRequired
    };

    static defaultProps = {
        currentStoreCode: 'default'
    };

    state = {
        isOpened: false
    };

    containerFunctions = {
        handleStoreSelect: this._handleStoreSelect.bind(this),
        onStoreSwitcherClick: this.onStoreSwitcherClick.bind(this),
        onStoreSwitcherOutsideClick: this.onStoreSwitcherOutsideClick.bind(this)
    };

    containerProps() {
        const { currentStoreCode, storeList } = this.props;

        return {
            currentStoreCode,
            storeList: this._formatStoreList(storeList),
            storeLabel: this.getCurrentLabel(currentStoreCode)
        };
    }

    onStoreSwitcherClick() {
        const { isOpened } = this.state;

        this.setState({ isOpened: !isOpened });
    }

    onStoreSwitcherOutsideClick() {
        this.setState({ isOpened: false });
    }

    _formatStoreList(storeList) {
        return storeList.reduce((acc, {
            name, code, is_active, base_url, base_link_url, default_display_currency_code
        }) => {
            if (!is_active) {
                return acc;
            }

            return [
                ...acc,
                {
                    id: `store_${ code }`,
                    value: code,
                    storeUrl: base_url,
                    storeLinkUrl: base_link_url,
                    label: name,
                    currency: default_display_currency_code
                }
            ];
        }, []);
    }

    getCurrentLabel(storeCode) {
        const { storeList } = this.props;
        const { name } = storeList.find(
            ({ code }) => code === storeCode
        ) || {};

        return name;
    }

    _handleStoreSelect(storeCode) {
        if (storeCode === 'ru') {
            window.location = '/';
        } else {
            window.location = `/${ storeCode}`;
        }
    }

    render() {
        return (
            <StoreSwitcher
              { ...this.containerFunctions }
              { ...this.containerProps() }
              { ...this.state }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreSwitcherContainer);
