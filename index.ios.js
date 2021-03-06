/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

/* https://facebook.github.io/react-native/docs/props.html
import Bananas from './components/props/bananas';
import LotsOfGreetings from './components/props/lots_of_greetings';
 */

/* https://facebook.github.io/react-native/docs/state.html
import BlinkApp from './components/state/blink_app';
 */

/* https://facebook.github.io/react-native/docs/style.html
import LotsOfStyles from './components/style/lots_of_styles';
 */

/* https://facebook.github.io/react-native/docs/height-and-width.html
import FixedDimensionsBasics from './components/height_and_width/fixed_dimensions_basics';
import FlexDimensionsBasics from './components/height_and_width/flex_dimensions_basics';
 */

/* https://facebook.github.io/react-native/docs/flexbox.html
import FlexDirectionBasics from './components/flexbox/flex_direction_basics';
import JustifyContentBasics from './components/flexbox/justify_content_basics';
import AlignItemsBasics from './components/flexbox/align_items_basics';
 */

/* https://facebook.github.io/react-native/docs/handling-text-input.html
import PizzaTranslator from './components/handling_text_input/pizza_translator';
 */

/* https://facebook.github.io/react-native/docs/using-a-scrollview.html
import IScrolledDownAndWhatHappenedNextShockedMe from './components/using_a_scrollview/is_scrolled_down_and_what_happened_next_shocked_me';
 */

/* https://facebook.github.io/react-native/docs/using-a-listview.html
 */
import ListViewBasics from './components/using_a_listview/list_view_basics';

/* https://facebook.github.io/react-native/docs/network.html#content
import MoviesListView from './components/network/movies_list_view';
 */

/* https://facebook.github.io/react-native/docs/using-navigators.html
import YoDawgApp from './components/using_navigators/yo_dawg_app';
 */
import SimpleNavigationApp from './components/using_navigators/simple_navigation_app';

AppRegistry.registerComponent('TestApp', () => SimpleNavigationApp);
