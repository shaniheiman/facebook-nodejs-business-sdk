/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdPlacement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacement extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      bundle_id: 'bundle_id',
      display_format: 'display_format',
      external_placement_id: 'external_placement_id',
      google_display_format: 'google_display_format',
      id: 'id',
      name: 'name',
      platform: 'platform',
      status: 'status',
    });
  }


  get (fields, params): AdPlacement {
    return this.read(
      fields,
      params
    );
  }
}
