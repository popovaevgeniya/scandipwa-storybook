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

import './StoreSwitcher.style';

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import ClickOutside from 'Component/ClickOutside';
import Field from 'Component/Field';
import StoreItems from 'Component/StoreItems';

/** @namespace Component/StoreSwitcher/Component */
const StoreSwitcher = () => {
    const renderStoreList = (item) => {
        const { handleStoreSelect } = this.props;
        const { value } = item;

        return (
            <StoreItems
              key={ value }
              item={ item }
              handleStoreSelect={ handleStoreSelect }
            />
        );
    };

    const renderMobileStoreSwitcher = () => {
        const {
            storeList,
            handleStoreSelect,
            currentStoreCode
        } = this.props;

        return (
            <div block="StoreSwitcher">
                <Field
                  id="StoreSwitcher"
                  name="StoreSwitcher"
                  type="select"
                  selectOptions={ storeList }
                  value={ currentStoreCode }
                  onChange={ handleStoreSelect }
                />
            </div>
        );
    }

    const renderDesktopStoreSwitcher = () => {
        const {
            storeList,
            onStoreSwitcherOutsideClick,
            onStoreSwitcherClick,
            isOpened,
            storeLabel
        } = this.props;

        const mods = { isOpen: isOpened };
        storeList.push(storeList.shift());

        return (
            <div block="StoreSwitcher">
                <ClickOutside onClick={ onStoreSwitcherOutsideClick }>
                    <button
                      block="StoreSwitcher"
                      elem="Title"
                      mods={ mods }
                      onClick={ onStoreSwitcherClick }
                    >
                        { storeLabel }
                    </button>

                    <div block="StoreSwitcher" elem="StoreList" mods={ mods }>
                        { storeList.map(this.renderStoreList) }
                    </div>
                </ClickOutside>
            </div>
        );
    }


    const { storeList } = this.props;

    if (storeList.length <= 1) {
        return null;
    }

    return renderDesktopStoreSwitcher();

}
StoreSwitcher.propTypes = {
    storeList: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.string
        )
    ).isRequired,
    isOpened: PropTypes.bool.isRequired,
    currentStoreCode: PropTypes.string.isRequired,
    handleStoreSelect: PropTypes.func.isRequired,
    onStoreSwitcherClick: PropTypes.func.isRequired,
    onStoreSwitcherOutsideClick: PropTypes.func.isRequired,
    storeLabel: PropTypes.string
};

StoreSwitcher.defaultProps = {
    storeLabel: ''
};
export default StoreSwitcher;
