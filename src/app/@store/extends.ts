/**
 * aurora-forum
 * Copyright Lee. All Rights Reserved.
 *
 * @author Lee  <aurora-club@outlook.com>
 * @date   2020/4/30 16:06
 *
 * Use of this source code is governed by an MIT-style license that can be
 */

export interface Props<T> {
  payload: T;
  // 由哪里调用
  patron: string;
}
