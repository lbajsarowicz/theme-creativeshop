// =============================================================================
// CMS pages entry point
// It imports all the components required by CMS pages
// Each page type has own entry point containing required components.
// It allows optimizing bundles in webpack - which gathers common imports in separate package.
// It is a job of every component to initilize itself.
import 'config/base.scss';
// TODO: Remove this file when possible
import 'bundle.scss';

// =============================================================================
// Components
// =============================================================================

// Base components
import 'components/authorization-link';
import 'components/addtocart';
import 'components/autocomplete';
import 'components/breadcrumbs';
import 'components/button';
import 'components/container';
import 'components/cookie-message';
import 'components/device-detection';
import 'components/display-controller';
import 'components/dropdown-switcher';
import 'components/field';
import 'components/footer';
import 'components/grid-layout';
import 'components/headline';
import 'components/header';
import 'components/lazyload';
import 'components/links-block-addto';
import 'components/logo';
import 'components/messages';
import 'components/minicart';
import 'components/minicart-product';
import 'components/free-shipping-indicator';
import 'components/modal';
import 'components/navigation';
import 'components/newsletter';
import 'components/offcanvas-toggle';
import 'components/offcanvas-navigation';
import 'components/offcanvas';
import 'components/page-title';
import 'components/page-bottom';
import 'components/price-box';
import 'components/product-tile';
import 'components/qty-increment';
import 'components/slider';
import 'components/social-media-list';
import 'components/star-rating';
import 'components/swatches';
import 'components/tile-gallery';
import 'components/topbar';
import 'components/typography';
import 'components/usps';
import 'components/visually-hidden';
import 'components/select';
import 'components/ie11-modal';
import 'components/pwa-notification';

import 'components/non-critical';

// Content Constructor
import 'components/brand-carousel';
import 'components/category-links';
import 'components/daily-deal-teaser';
import 'components/dailydeal';
import 'components/image-teaser';
import 'components/image-teaser-legacy';
import 'components/paragraph';
import 'components/products-carousel';
import 'components/products-grid';
import 'components/products-list';
import 'components/product-finder';
import 'components/separator';
import 'components/video-player';
import 'components/accordion';

import 'customizations/plugincompany-contactforms/plugincompany-contactforms';

// Exported for usage in templates:
export { Select } from 'components/select';
export { AddressAutofill } from 'components/address-autofill';
