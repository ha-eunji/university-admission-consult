import { makeAutoObservable } from "mobx";

class NavigationStore {
  private _currentNav: string;
  private _currentTab: string;

  constructor() {
    makeAutoObservable(this);

    this._currentNav = "홈";
    this._currentTab = "국내";
  }

  public get currentNav(): string {
    return this._currentNav;
  }
  public set currentNav(value: string) {
    this._currentNav = value;
  }

  public get currentTab(): string {
    return this._currentTab;
  }
  public set currentTab(value: string) {
    this._currentTab = value;
  }
}

export const navigationStore = new NavigationStore();
