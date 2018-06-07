import { BrowserRouter as RouteComponentProps } from "react-router-dom";
export interface IPageLoader {
    loading ?: boolean;
    title ? : string;
}

export interface ISnackBar {
	open : boolean;
	message ?: string;
	autoHideDuration ?: number;
}

export interface ICurrency {
  label: string;
  value: string;
}

export interface IAccountForm {
  name: string;
  balance: string;
  group: string;
}
export interface IDocTimeStamp {
  added: any;
  updated: any;
}
export interface IAccountData {
  name: string;
  balance: string;
  group: string;
  _id: string;
  _rev: string;
  timestamp_: IDocTimeStamp;
}
export interface IAccountsArray {
  doc: IAccountData;
  id: any;
  key: any;
  value: any;
}

export interface IConfirmDialog {
  title ?: string;
  desc ?: string;
  open: boolean;
  okText ?: string;
  cancelText ?: string;
  onClose ?: any;
}

export interface ICurrencyGroup {
  label: string;
  value: string;
}
export interface IRouterProps extends RouteComponentProps<any> {
  history;
}