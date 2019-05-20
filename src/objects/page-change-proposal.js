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
 * PageChangeProposal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageChangeProposal extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      acceptance_status: 'acceptance_status',
      category: 'category',
      current_value: 'current_value',
      id: 'id',
      proposed_value: 'proposed_value',
      upcoming_change_info: 'upcoming_change_info',
    });
  }


  get (fields, params): PageChangeProposal {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): PageChangeProposal {
    return super.update(
      params
    );
  }
}
