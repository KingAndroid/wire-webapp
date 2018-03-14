/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

window.z = window.z || {};
window.z.calling = z.calling || {};

z.calling.CallingService = class CallingService {
  /**
   * Construct an new CallingService.
   * @param {z.client.ClientEntity} clientEntity - Local client entity
   */
  constructor(clientEntity) {
    this.logger = new z.telemetry.calling.CallLogger('z.calling.CallingService', z.config.LOGGER.OPTIONS);
    this.client = clientEntity;
  }

  /**
   * Retrieves a calling config from the backend.
   * @returns {Promise} Resolves with call config information
   */
  getConfig() {
    return this.client.send_request({
      cache: false,
      type: 'GET',
      url: this.client.create_url('/calls/config'),
    });
  }
};
