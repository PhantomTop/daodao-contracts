/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Denom = {
  native: string;
} | {
  cw20: Addr;
};
export type Addr = string;
export interface InstantiateMsg {
  manager?: string | null;
  owner?: string | null;
  reward_duration: number;
  reward_token: Denom;
  staking_contract: string;
}
export type ExecuteMsg = {
  stake_change_hook: StakeChangedHookMsg;
} | {
  claim: {};
} | {
  receive: Cw20ReceiveMsg;
} | {
  fund: {};
} | {
  update_reward_duration: {
    new_duration: number;
  };
} | {
  update_owner: {
    new_owner?: string | null;
  };
} | {
  update_manager: {
    new_manager?: string | null;
  };
};
export type StakeChangedHookMsg = {
  stake: {
    addr: Addr;
    amount: Uint128;
  };
} | {
  unstake: {
    addr: Addr;
    amount: Uint128;
  };
};
export type Uint128 = string;
export type Binary = string;
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export type QueryMsg = {
  info: {};
} | {
  get_pending_rewards: {
    address: string;
  };
};
export interface MigrateMsg {}
export interface PendingRewardsResponse {
  address: string;
  denom: Denom;
  last_update_block: number;
  pending_rewards: Uint128;
}
export interface InfoResponse {
  config: Config;
  reward: RewardConfig;
}
export interface Config {
  manager?: Addr | null;
  owner?: Addr | null;
  reward_token: Denom;
  staking_contract: Addr;
}
export interface RewardConfig {
  period_finish: number;
  reward_duration: number;
  reward_rate: Uint128;
}